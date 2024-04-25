import React from 'react'
import logos from '../Assets/logos.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import playstore from '../Assets/playstore.png';
import '../Components/Responsive.css'


const plays = playstore;

const log=logos;
export default function Footer() {
  return ( 
    <div className='footerMain flex-row flex  bg-teal-600 text-white justify-between p-6 '>
        <div>

      <div>
        <img src={log} alt="img" className='aa' />
      </div>
      <div> <h1 className='font-bold text-2xl'>PUTATOE</h1>
      <h3>version 12.0.0</h3></div>
     
      </div>
<div className="usefullLinks flex-col cursor-pointer">
    <h1 className='font-bold text-2xl'>USEFULL LINKS</h1>
    <p>Recharge & Payments</p>
    <p>Jobs & internships</p>
    <p>Blog Posts</p>
    <p>Promotions</p>
    <p>Loans</p>
    </div>

    <div className="AboutPutatoe flex-col cursor-pointer">
    <h1 className='font-bold text-2xl'>ABOUT PUTATOE</h1>
    <p>About us</p>
    <p>Contact us</p>
    <p>Terms and conditions</p>
    </div>

    
    <div className="POPULARSEARCHES flex-col cursor-pointer">
    <h1 className='font-bold text-2xl'>POPULAR SEARCHES</h1>
    <p>Grocery</p>
    <p>Construction</p>
    <p>Daily Needs</p>
    <p>Courier Service</p>
    <p>Education</p>
    <p>Laundry Service</p>
    </div>


    <div className="ConnectUs flex-col cursor-pointer flex  ">
        <div >

    <h1 className='font-bold text-2xl'>CONNECT US</h1>
        </div>
    <div className='flex gap-11 p-3'>
    <FaFacebook  size={35}/>
    <ImLinkedin size={35} />
    <FaInstagram size={35}/>
    </div>
    <div>
    <p>GET OUR APP</p>
    </div>
    <div>
    <img src={plays} alt="img" className='w-[43%] ' />

    </div>
   
    </div>

    </div>
  )
}
