// components/Footer.tsx

import Image from 'next/image';
import img from '../assets/Rohaniyat.jpg'
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div >
        <Image
            src={img}
            alt="Left Side Image"
            width={300}
            height={300}
            className="w-full object-cover py-1"
 
          />
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            {/* About Us Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                We are committed to providing the best services. Our mission is to ...
                {/* enhance the business growth of our customers with creative design
                and development. */}
              </p>
            </div>
      
            {/* Navigation Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Navigation</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="/aboutus" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
              </ul>
            </div>
      
            {/* Contact Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="text-gray-400">
                <li className="mb-2">Email: roohanibaba@gmail.com</li>
                <li className="mb-2">Phone: (123) 456-7890</li>
                <li className="mb-2">Address: 123 Main Street, City, Country</li>
              </ul>
            </div>
      
            {/* Social Media Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter">Twitter</i>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in">LinkedIn</i>
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram">Instgram</i>
                </a>
              </div>
            </div>
          </div>
      
          {/* Footer Bottom Section */}
          <div className="text-center text-gray-400 mt-10">
            <p>&copy; {new Date().getFullYear()} RAIC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
