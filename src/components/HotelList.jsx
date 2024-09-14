import React from 'react';
import hotels from '../hotelsCom/HotelSample';
import HotelCard from '../hotelsCom/HotelCard';


const HotelList = ({ hotels }) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
