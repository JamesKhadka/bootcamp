import React from 'react';
import HotelList from './HotelList';
import hotels from '../hotelsCom/HotelSample';

const Started = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Hotels</h1>
      <HotelList hotels={hotels} />
    </div>
  );
}

export default Started
