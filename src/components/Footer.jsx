import React from 'react';
import { Link } from 'react-router-dom';

// Import ไอคอน
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaLine, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  

  const iconStyle = "text-2xl transition-colors duration-200 hover:text-purple-main";

  return (

    <footer className="bg-[#AF8FE9] border-t border-purple-300 mt-12">
      <div className="container max-w-[1773px] mx-auto h-20 px-4">
    
        <div className="flex gap-5 items-center h-full">
          
          <div className="flex items-center gap-x-6">
            <Link to="/" className="text-3xl font-bold text-black drop-shadow-md">
              UDee
            </Link>
            <div className="flex gap-x-4">
              <Link to="" className="font-medium text-black hover:text-gray-500">
                เกี่ยวกับเรา
              </Link>
              <Link to="" className="font-medium text-black hover:text-gray-500">
                ติดต่อเรา
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <a href="#" className={iconStyle}><SiGmail /></a>
            <a href="#" className={iconStyle}><FaFacebook /></a>
            <a href="#" className={iconStyle}><FaLine /></a>
            <a href="#" className={iconStyle}><IoLocationSharp /></a>
            <a href="#" className={iconStyle}><FaPhone /></a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;