import React, { useState } from 'react';

const HotelCard = ({ hotel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newCardVisible, setNewCardVisible] = useState(false); // State to handle the second card

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setNewCardVisible(true); // Show new card after click
      }, 100); // Delay for a transition effect
    } else {
      // When the new card is clicked, hide the new card and show the original card again
      setNewCardVisible(false);
      setTimeout(() => {
        setIsOpen(false); // After hiding the new card, show the original one
      }, 100); // Delay for a transition effect
    }
  };

  return (
    <>
      {/* Original card */}
      <div
        className={`bg-indigo-300 rounded-2xl transition-all duration-300 ease-in-out p-4 cursor-pointer ${isOpen ? 'hidden' : 'hover:scale-105  hover:bg-cyan-300 hover:shadow-black hover:shadow-xl'
          }`}
        onClick={handleClick}
        style={{ maxHeight: isOpen ? '0' : '300px', overflow: 'hidden' }}
      >
        <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-bold text-green-700 mb-2">{hotel.name}</h2>
        <p className="text-gray-700 mb-4">{hotel.description}</p>
      </div>

      {/* New card */}
      {newCardVisible && (
        <div
          className="bg-indigo-300 p-6 rounded-2xl shadow-lg flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105  hover:bg-cyan-300  hover:shadow-black hover:shadow-xl"
          onClick={handleClick} // Clicking this card will hide it and show the original card
        >
          <h3 className="text-2xl font-bold mb-4">{hotel.name}</h3>
          <img src={hotel.image} alt={hotel.name} className="w-full h-50 object-cover mb-4 rounded" />
          <p className="text-gray-700 mb-4">{hotel.fullDescription}</p>
          <a
            href={hotel.bookLink}
            className="text-cyan-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer" >
            Book Now
          </a>
        </div>
      )}
    </>
  );
};

export default HotelCard;
