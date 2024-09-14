import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-pink-300">
      {/* Header */}
      <header className="bg-pink-400 shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-500">Our Services</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Comfortable Rooms</h3>
              <p className="text-gray-600">
                Enjoy spacious, clean rooms with cozy beds, ensuring a peaceful and relaxing stay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Hot Water</h3>
              <p className="text-gray-600">
                Hot water facilities are available around the clock, perfect for refreshing baths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Free Wi-Fi</h3>
              <p className="text-gray-600">
                Stay connected with our high-speed internet access available in all rooms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Nepali Cuisine</h3>
              <p className="text-gray-600">
                Experience authentic Nepali dishes prepared fresh, ensuring a delightful dining experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Local Tours</h3>
              <p className="text-gray-600">
                Explore Auntu Dadha and nearby attractions with guided tours organized by our team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Airport Pickups</h3>
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