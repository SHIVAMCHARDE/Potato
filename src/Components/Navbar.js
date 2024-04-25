import React, { useState } from 'react';
import { MdSendToMobile } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-500 p-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold mb-[10px]"></div>
        {/* Button to toggle navbar */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          Menu
        </button>
      </div>
      {/* Collapsible part of the navbar */}
      <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <div className="md:flex md:ml-auto">
        <a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4"><MdSendToMobile size={24} /><p>RECHARGE</p></a>
<a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-10"><MdPayment size={24} /><p>PAYMENT</p></a>
<a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-10"><RiMoneyRupeeCircleFill size={24} /><p>LOAN</p></a>
<a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-10"><ImNewspaper size={24} /><p>NEWS</p></a>
<a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-10"><MdWork size={24} /><p>JOBS</p></a>
<a href="/Home" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-10"><FaBlogger size={24} /><p>BLOGS</p></a>
        </div>
      </div>
    </nav>
  );
}
