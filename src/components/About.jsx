import React from 'react';

import ja from '../assets/ja.png';
import uj from '../assets/uj.jpg';
import Footer from './Footer';


const About = () => {
  return (
    <div className="min-h-screen bg-pink-300">
      {/* Header */}
      <header className="bg-pink-400 shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-500">About Us</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Auntu Homestay was founded with the vision of providing a comfortable, homely experience
            to travelers visiting the beautiful region of Auntu Dadha. We believe in offering top-notch hospitality
            while preserving the traditional essence of Nepali culture.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-pink-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Replace this with the founder's image */}
                <img
                  src={ja}
                  alt="Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">JAMES KHADKA</h3>
              <p className="text-gray-600 mb-4">Founder and CEO</p>
              <p className="text-gray-600">
                James is passionate about offering the best homestay experience, ensuring
                every guest feels at home in Auntu Dadha.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Replace this with the founder's image */}
                <img
                  src={uj}
                  alt="Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">UJWAL ADHIKARI</h3>
              <p className="text-gray-600 mb-4">Co-Founder and Manager</p>
              <p className="text-gray-600">
                Ujwal manages daily operations, ensuring that every guest receives excellent
                service and comfort during their stay.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;

