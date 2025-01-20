import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 my-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            We provide the latest cryptocurrency trends, insights, and tools to
            help you navigate the world of digital currencies. Stay updated and
            invest smartly!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stay connected with us on social media for the latest updates.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-white transition duration-200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} CryptoHeaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
