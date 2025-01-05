const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // For loading environment variables

const app = express();
const port = process.env.PORT || 5000;

// Setup middleware
app.use(cors());  // Enable CORS for cross-origin requests
app.use(bodyParser.json());  // Parse incoming JSON requests

// SQLite Database Connection
const dbPath = process.env.DATABASE_PATH || './user_db.db';  // Use DATABASE_PATH from environment variables
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
  }
});

// JWT Secret Key (Keep it private and store it in .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';

// Create Users table if not exists (run once on startup)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT,
      last_name TEXT,
      phone_number TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
});

// User Signup Route
app.post('/signup', async (req, res) => {
  const { first_name, last_name, phone_number, email, password } = req.body;

  // Input validation
  if (!email || !password || !first_name || !last_name || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user with the same email already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, existingUser) => {
      if (err) {
        console.error('Error checking if user exists:', err);
        return res.status(500).json({ message: 'Error checking user' });
      }

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into DB
      db.run(
        'INSERT INTO users (first_name, last_name, phone_number, email, password) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, phone_number, email, hashedPassword],
        function (err) {
          if (err) {
            console.error('Error signing up:', err);
            return res.status(500).json({ message: 'Error signing up' });
          }
          res.status(201).json({ message: 'User created successfully' });
        }
      );
    });
  } catch (err) {
    console.error('Error signing up:', err);
    res.status(500).json({ message: 'Error signing up' });
  }
});

// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and Password are required' });
  }

  try {
    // Check if user exists in DB
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) {
        console.error('Error checking user:', err);
        return res.status(500).json({ message: 'Error logging in' });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create JWT Token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
    });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Protected Route (Example)
app.get('/profile', async (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Fetch user profile using decoded userId
    db.get('SELECT * FROM users WHERE id = ?', [decoded.userId], (err, user) => {
      if (err) {
        console.error('Error fetching profile:', err);
        return res.status(500).json({ message: 'Error fetching profile' });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    });
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
