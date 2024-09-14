import React from 'react';
import Footer from './Footer';


const Contact = () => {

  return (
    <div className="min-h-screen bg-pink-300">
      {/* Header */}
      <header className="bg-pink-400 shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-500">Contact Us</h1>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-left text-gray-600 font-semibold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-600 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-600 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your message..."
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-pink-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Contact Info</h2>
          <p className="text-white">Email: inquery@auntuhomestay.com</p>
          <p className="text-white">Phone: +977-..............</p>
          <p className="text-white">Address: Auntu Dadha, Ilam, Nepal</p>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
