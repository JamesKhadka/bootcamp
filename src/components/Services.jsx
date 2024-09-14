import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-pink-300">
      {/* Header */}
      <header className="bg-pink-400 shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-500 text-center underline">OUR SERVICES</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Comfortable Rooms</h3>
              <p className="text-gray-600">
                Enjoy spacious, clean rooms with cozy beds, ensuring a peaceful and relaxing stay.
              </p>
            </div>
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">24/7 Hot Water</h3>
              <p className="text-gray-600">
                Hot water facilities are available around the clock, perfect for refreshing baths.
              </p>
            </div>
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Free Wi-Fi</h3>
              <p className="text-gray-600">
                Stay connected with our high-speed internet access available in all rooms.
              </p>
            </div>
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xlv">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Traditional Nepali Cuisine</h3>
              <p className="text-gray-600">
                Experience authentic Nepali dishes prepared fresh, ensuring a delightful dining experience.
              </p>
            </div>
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Local Tours</h3>
              <p className="text-gray-600">
                Explore Auntu Dadha and nearby attractions with guided tours organized by our team.
              </p>
            </div>
            <div className="bg-indigo-300 p-6 rounded-lg shadow-md hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Airport Pickups</h3>
              <p className="text-gray-600">
                We offer convenient airport transfers to ensure a smooth arrival and departure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;