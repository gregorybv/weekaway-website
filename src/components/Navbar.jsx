import React from 'react';
// import {BsChatSquareDots} from "react-icons/bs";
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      <div>
        <FaBars/>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#deals">Deals</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar



