import React from 'react';
import menuData from '../data/navbar';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-2">
          Best Islamic Scholar Rohani “Professora Syeda Sadaf Bukhari” is online worldwide. He provides you the best online Istikhara Wazifa tweet services internationally and locally.
        </p>
        <p className="mb-2">
          “Professora Syeda Sadaf Bukhari” is a real spiritual healer with a Govt of Pakistan issued license.
        </p>
        <p className="mb-2">
          He is providing the best Salat-al-Istikharah, Wazifa, Taweezat predictions regarding marriage proposals for you, for your sister, daughter, as well as for anyone you can get exact information about Comming ristha.
        </p>
        <p className="mb-2">
          Online Salat-al-Istikharah, Salat-al-Istikharah wazifa and taweez for marriage, Salat-al-Istikharah wazifa and taweez for a baby name, Salat-al-Istikharah wazifa and taweez for love marriage, Salat-al-Istikharah Wazifa and Taweez for job, Salat-al-Istikharah Wazifa and Taweez for business, etc.
        </p>
        <p className="mb-4">
          24/7 “Professora Syeda Sadaf Bukhari” Free Contact at: +923219362267
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>0342340203402</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Share This Page</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_CURRENT_URL" target="_blank" rel="noopener noreferrer" className="text-blue-600">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com/share?url=YOUR_CURRENT_URL" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://wa.me/?text=YOUR_CURRENT_URL" target="_blank" rel="noopener noreferrer" className="text-green-600">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site YOUR_CURRENT_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Recent Links</h2>
          <ul className="space-y-2">
            {menuData.map((item) => (
              <li key={item.id}>
                {/* <a href={item.url} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                  {item.label}
                </a> */}
                {item.subMenu && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.id}>
                        <a href={subItem.url} className="text-blue-400 hover:text-blue-600 transition-colors duration-300 hover:underline">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
