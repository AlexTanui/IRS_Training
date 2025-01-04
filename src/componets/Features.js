import React from 'react';


const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

function App() {
  const cardsData = [
    { title: 'Card 1', content: 'This is the content for Card 1' },
    { title: 'Card 2', content: 'This is the content for Card 2' },
    { title: 'Card 3', content: 'This is the content for Card 3' },
    { title: 'Card 4', content: 'This is the content for Card 4' },
    { title: 'Card 5', content: 'This is the content for Card 5' },
  ];

  return (
    <div className="App">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
