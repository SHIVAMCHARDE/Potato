import React from "react";
import logos from "../Assets/logos.png";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import '../Components/Responsive.css'
const companylogo = logos;

export default function Header() {
  return (
    <div className=" NavMain flex flex-row items-center gap-[3%] bg-teal-600 justify-around  ">
      <div className="flex flex-row items-center">
        <div className="imgss h-[100%] w-[23%] p-[3px] ">
          <img src={companylogo} alt="img" className="HeaderImg m-[0.5%]" />
        </div>
        <div className="CompName">
          <div>
            <h2 className="heading text-white font-bold text-lg">PUTATOE</h2>
          </div>
          <div className="text-xs ml-5 text-white font-bold">
            <p>One Solution</p>
          </div>
        </div>
      </div>
      <div className="pt-2 relative  text-gray-600">
        <input
          className="Inpt border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center     gap-[23px]">
        <div className="IconsNotification flex row gap-5">
          <div>
            <MdMessage size={20} color="white" />
          </div>
          <div>
            <IoNotifications size={20} color="white" />
          </div>
          <div>
            <FaCartShopping size={20} color="white" />
          </div>
        </div>
        <button
          class=" LoginBtn middle none center mr-3 rounded-lg border border-black-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Login
        </button>
      </div>
    </div>
  );
}
