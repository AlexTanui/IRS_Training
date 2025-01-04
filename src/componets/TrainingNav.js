import React, { useState, useEffect } from 'react';
import './Trainingnav.css'
const NavTraining = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/api/cards') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openModal = (videoPath) => {
    setVideoSrc(videoPath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <div id="cards_display" className="row row-cols-1 row-cols-md-4 g-4">
      {cards.map((card) => (
        <div  className="col" key={card.id}>
          <div  className="card h-100">
            <div className="position-relative">
              <img 
                src={card.image} 
                className="card-img-top" 
                alt="Video thumbnail" 
              />
              <button
              id="play_btn"
                className="position-absolute top-50 start-50 translate-middle btn btn-light btn-lg"
                onClick={() => openModal(card.video)}
              >
                &#9654;
              </button>
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal for video */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tutorial</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <video
                  src={videoSrc}
                  controls
                  style={{ width: '100%' }}
                  autoPlay
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavTraining;
