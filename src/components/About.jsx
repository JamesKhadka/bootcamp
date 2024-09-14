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
          <h2 className="text-3xl font-bold mb-12 text-cyan-600 underline">OUR STORY</h2>
          <p className="text-gray-600 mb-6 text-xl">
            Auntu Homestay was established with a heartfelt vision to create a sanctuary where travelers could find a perfect blend of comfort, warmth, and the authenticity of a home away from home. Located in the serene and picturesque region of Auntu Danda, we aim to provide our guests with a truly memorable experience that goes beyond just accommodation. Our focus is on delivering exceptional hospitality, rooted in the values of Nepali traditions, while also catering to the modern comforts and conveniences that travelers seek. At Auntu Homestay, we are passionate about preserving the rich cultural heritage of Nepal and ensuring that every guest experiences the warmth of our community, the beauty of the landscape, and the spirit of our people.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-pink-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-cyan-600 underline">MEET OUR FOUNDERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="bg-teal-400 p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <div className="w-32 h-32 mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Replace this with the founder's image */}
                <img
                  src={ja}
                  alt="Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">JAMES KHADKA</h3>
              <p className="text-pink-600 mb-4">Founder and CEO</p>
              <p className="text-red-500 text-xl">
                James is passionate about offering the best homestay experience, ensuring
                every guest feels at home in Auntu Dadha.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-teal-400 p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-95  cursor-pointer transition-all hover:shadow-black hover:shadow-xl">
              <div className="w-32 h-32 mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Replace this with the founder's image */}
                <img
                  src={uj}
                  alt="Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">UJWAL ADHIKARI</h3>
              <p className="text-pink-600 mb-4">Co-Founder and Manager</p>
              <p className="text-red-500 text-xl">
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

