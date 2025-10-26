import React, { useState } from 'react'

import { FaBuilding } from "react-icons/fa";
import { FaRegHeart, FaShareSquare, FaHeart } from "react-icons/fa";

function AppHeader() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  const likeButtonClass = isLiked
    ? 'bg-red-500 text-white hover:bg-red-600'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <div className='container max-w-[1572px] mt-10 mx-auto px-4 border-b pb-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-6'>
        <div className='flex-grow'>
          <div className='flex flex-wrap items-center gap-4 mb-2'>
            <span className="font-medium flex gap-2 items-center bg-[#E1D0FF] text-[#5B21B6] text-sm py-2 px-4 rounded-lg">
              <FaBuilding />
              เช่า
            </span>
            <h2 className='font-bold text-3xl text-gray-800'>
              RC094125 ให้เช่า Condo Happy Condo Ratchada 18
            </h2>
          </div>
          <p className='text-xl text-gray-500'>
            ใกล้ MRT สุทธิสาร
          </p>
        </div>
        
        <div className='flex-shrink-0 flex flex-col items-start md:items-end gap-4'>
          <h2 className='text-4xl font-bold text-gray-900'>
            ฿ 15,000 
            <span className='text-xl font-normal text-gray-500'> /เดือน</span>
          </h2>
          <div className='flex gap-3 mt-4'>
            <button 
              onClick={handleLikeClick}
              className={`font-medium flex gap-2 items-center py-2 px-4 rounded-lg transition-colors ${likeButtonClass}`}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              ถูกใจ
            </button>
            <button className='font-medium flex gap-2 items-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors'>
              <FaShareSquare />
              แชร์
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader