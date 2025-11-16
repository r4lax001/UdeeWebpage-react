import React, { useState } from 'react'
import { Routes, Link } from "react-router-dom";

import { IoIosLock } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const MegaMenuContent = ({ type }) => {
  const title = type === 'buy' ? 'ขาย' : 'เช่า';

  return (
    <div className="absolute top-full left-0 mt-4 w-auto bg-white rounded-lg shadow-xl p-8 text-black z-50">
      <div className="grid grid-cols-3 gap-x-12 gap-y-6 w-max">
        
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-500 text-sm">ทำเล</h3>
          <ul className="space-y-2 text-base">
            <li><Link to="#" className="hover:text-[#AF8FE9]">กรุงเทพฯ</Link></li>
            <li><Link to="#" className="hover:text-[#AF8FE9]">ชลบุรี (พัทยา)</Link></li>
            <li><Link to="#" className="hover:text-[#AF8FE9]">หัวหิน</Link></li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-1 cursor-pointer hover:text-[#AF8FE9]">
            โครงการคอนโด <span className="text-xs">&gt;</span>
          </h3>
          <ul className="space-y-2 text-base">
            <li><Link to="#" className="hover:text-[#AF8FE9]">คอนโด</Link></li>
            <li><Link to="#" className="hover:text-[#AF8FE9]">อพาร์ทเม้นท์</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-500 text-sm">บ้านและที่ดิน</h3>
          <ul className="space-y-2 text-base">
            <li><Link to="#" className="hover:text-[#AF8FE9]">ทาวน์เฮ้าส์</Link></li>
            <li><Link to="#" className="hover:text-[#AF8FE9]">บ้านเดี่ยว</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4">
        <Link to="#" className="font-semibold text-gray-900 hover:text-[#AF8FE9] text-sm">
          ดูประกาศ{title}ทั้งหมด &gt;
        </Link>
      </div>
    </div>
  );
};


function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const btnNavStyle = "flex items-center justify-center gap-x-1.5 bg-white text-[#000000] font-medium py-2 px-5 rounded-full transform transition-all duration-200 hover:shadow-lg active:scale-95";
  
  const menuTriggerStyle = "flex items-center gap-1 text-black text-lg font-medium transition-colors hover:text-gray-200 cursor-pointer";

  const handleMenuToggle = (menuName) => {
    setOpenMenu(prev => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <div className='bg-[#AF8FE9] shadow-lg'>
        <div className='container max-w-[1773px] mx-auto h-20 px-4'>
          <div className='flex justify-between items-center h-full'>

            <div className="flex items-center gap-x-8">
              <Link to="/" className='text-[40px] font-semibold text-white drop-shadow-md'>UDee</Link>

              <div className="flex items-center gap-x-6">
                
                <div className="relative">
                  <div className={menuTriggerStyle} onClick={() => handleMenuToggle('buy')}>
                    <span>ซื้อ</span>
                    <IoIosArrowDown />
                  </div>
                  {openMenu === 'buy' && <MegaMenuContent type="buy" />}
                </div>

                <div className="relative">
                  <div className={menuTriggerStyle} onClick={() => handleMenuToggle('rent')}>
                    <span>เช่า</span>
                    <IoIosArrowDown />
                  </div>
                  {openMenu === 'rent' && <MegaMenuContent type="rent" />}
                </div>

              </div>
            </div>

            <div className='flex items-center gap-x-3'>
              <Link to="">
                <button className={btnNavStyle}>
                  <FiPlus size={20} />
                  ลงขาย
                </button>
              </Link>
              <Link to="">
                <button className={btnNavStyle}>
                  <IoIosLock size={20} />
                  เข้าสู่ระบบ/สมัครสมาชิก
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar