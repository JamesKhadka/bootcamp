import React from 'react';
import HotelList from './HotelList';
import hotels from '../hotelsCom/HotelSample';

const Started = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-cyan-500 text-center underline">OUR HOTELS</h1>
      <HotelList hotels={hotels} />
    </div>
  );
}

export default Started
