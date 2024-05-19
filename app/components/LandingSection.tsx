import React from 'react';
import Link from 'next/link';
import menuData from '../data/navbar';
import logo from '../assets/Rohani-Amil.png'
import Image from 'next/image';
const LandingSection: React.FC = () => {
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row">
      {/* Left Side Content */}
      <div className="md:w-3/4 p-4">
              <Image src={logo} alt="logo Rohani Amil" width={300} height={300} className="my-10" />

        <h2 className="text-3xl font-semibold mb-4">Welcome to
          <span className="text-green-600 transition duration-500 ease-in-out transform hover:scale-110">
            &nbsp;Rohani Alim Istikhara Center
          </span>
        </h2>
        <p className="text-lg text-gray-700">

          Best Islamic Scholar Rohani&nbsp;
          <span className='text-green-500 transition duration-500 ease-in-out transform hover:scale-110'>
            “Professra Syeda Sadaf Bukhari”
          </span>
            &nbsp;
          is online worldwide. He provides you best online Istikhara Wazifa tweet services internationally and locally.
        </p>
        <p>
        <span className='text-green-500 transition duration-500 ease-in-out transform hover:scale-110'>
            “Professra Syeda Sadaf Bukhari”
          </span> is a real spiritual healer with a Govt of Pakistan issued license.
        </p>
        <p>
          He is providing the best Salat-al-Istikharah, Wazifa, Taweezat predictions regarding marriage proposals for you, for your sister, daughter, as well as for anyone you can get exact information about Comming ristha.
        </p>
        <p>
          Online Salat-al-Istikharah, Salat-al-Istikharah wazifa and taweez for marriage, Salat-al-Istikharah wazifa and taweez for a baby name, Salat-al-Istikharah wazifa and taweez for love marriage, Salat-al-Istikharah Wazifa and Taweez for job, Salat-al-Istikharah Wazifa and Taweez for bussniess, etc.
        </p>
        <p>
          24/7 “Professora Syeda Sadaf Bukhari” Free Contact at:
          +923219362267
        </p>
      </div>

      {/* Right Side Recent Links */}
      <div className="md:w-1/4 p-4 hidden md:block md:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Recent Links</h3>
        <ul className="">
          {menuData.map((item) => (
            <li key={item.id}>
              {/* <a href={item.url} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                  {item.label}
                </a> */}
              {item.subMenu && (
                <ul className="px-1">
                  {item.subMenu.map((subItem) => (
                    <div className='py-1'>

                      <Link href={subItem.url} key={subItem.id} passHref>
                        <div className="text-green-500 hover:underline transition duration-300 cursor-pointer">{subItem.label}</div>
                      </Link>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LandingSection;
