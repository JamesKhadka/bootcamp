import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-pink-600  py-8">
      <div className="container mx-auto px-6 flex justify-between">
        {/* Useful Links */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2"><a href="/" className="hover:text-teal-300">Home</a></li>
            <li className="mb-2"><a href="/about" className="hover:text-teal-300">About Us</a></li>

            <li className="mb-2"><a href="/services" className="hover:text-teal-300">Services</a></li>

            <li className="mb-2"><a href="/contact" className="hover:text-teal-300">Contact Us</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            Welcome to Antu stay, where comfort meets nature. Nestled in serene landscapes, our homestay offers a peaceful retreat with cozy accommodations and personalized hospitality. Whether you're seeking adventure, relaxation, or a taste of local culture, we provide the perfect escape. Enjoy our warm atmosphere, delicious local cuisine, and tailored services that ensure an unforgettable stay. Let us make your visit truly special!
          </p>
        </div>

        {/* Contact & Social Links */}
        <div className="w-1/3 ml-10">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <ul className="mb-4">
            <li className="mb-2">📞 +977-..........</li>
            <li className="mb-2">📧 inquiry@antuhomestay.gmail.com</li>
            <li className="mb-2">💬 Contact us</li>
          </ul>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-pink-500 py-6 text-center">
        <p>Copyright © Antu Homestay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
