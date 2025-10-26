import React, { useState } from 'react';

import { BsChatDotsFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

function SpeedDial() {
  // 1. สร้าง State เพื่อจัดการการ เปิด/ปิด
  const [isOpen, setIsOpen] = useState(false);
  const pst ='fixed bottom-8 right-20 top-30 mb-10 z-50 flex flex-col items-end'

  return (

    <div className={pst}>
      
      <div 
        className={`
          bg-white w-72 rounded-2xl shadow-xl p-4 mb-4 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
        `}
      >
        <p className="text-lg font-medium text-black mb-4">รายละเอียดผู้ขาย</p>
        
        {/* ข้อมูลผู้ขาย (จำลอง) */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-semibold text-gray-900">Alivar Estate Alivar Estate</p>
            <p className="text-sm text-gray-500">เป็นสมาชิกเมื่อ 1 ต.ค. 68</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            <BiChat size={20} />
            <span>แชท</span>
          </button>
          
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 w-1/2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              <IoCallOutline size={20} />
              <span>โทร</span>
            </button>
            <button className="flex items-center justify-center gap-2 w-1/2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              <IoPersonOutline size={20} />
              <span>โปรไฟล์</span>
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#AF8FE9] text-white flex items-center justify-center shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-110"
      >
        
        {/* อนิเมชันหมุนไอคอนตอนเปิด/ปิด */}
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <IoClose size={32} /> : <BsChatDotsFill size={28} />}
        </div>
      </button>
    </div>
  );
}

export default SpeedDial;