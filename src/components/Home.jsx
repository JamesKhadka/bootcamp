import React from 'react';
import Counters from './Counter';
import Footer from './Footer';
import Started from './Started';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className="min-h-screen bg-pink-300">

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/5/50/Antu_dada_image_1.jpg")' }}>
        <div className="bg-cyan-500 bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h1 className="text-6xl font-bold mb-4">Welcome to Antu Homestay Service</h1>
            <p className="text-2xl mb-6">We provide the best comfort for your stay</p>
            <Link to="/started" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"> Get Started </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-lg  shadow-md relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-cyan-200 ">
              <h3 className="text-xl font-bold mb-4">Best Stay</h3>
              <p className="text-gray-600">For the best stay in Auntu Dadha, prioritize hotels or guesthouses with excellent reviews for comfort, cleanliness, and service. Look for amenities like comfortable bedding, hot water, reliable Wi-Fi, and good food options. Peaceful surroundings and friendly staff are key factors for a pleasant stay. Check platforms like Booking.com or TripAdvisor for trusted recommendations and reviews..</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-cyan-200 ">
              <h3 className="text-xl font-bold mb-4">Best Comfort</h3>
              <p className="text-gray-600">For the best comfort in a hotel at Auntu Dadha, look for accommodations offering clean, spacious rooms, comfortable bedding, hot water, reliable electricity, and Wi-Fi. Additionally, good food services, peaceful surroundings, and friendly staff can greatly enhance your stay. Always check reviews on platforms like Booking.com or TripAdvisor to ensure the comfort levels meet your expectations..</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-cyan-200 ">
              <h3 className="text-xl font-bold mb-4">Best Service</h3>
              <p className="text-gray-600">For the best hotel services in Auntu Dadha, ask locals for recommendations or check online platforms like Booking.com, TripAdvisor, or Agoda for user reviews. You can also explore social media travel groups and local tourism pages for hidden gems not listed on major sites. When choosing, inquire about essential services like cleanliness, hot water, Wi-Fi, dining, and transportation, as these may vary in rural areas..</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Counters />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;