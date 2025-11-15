import React from 'react';
import { IoIosPin } from "react-icons/io"; 

// PropertyCard Component จะรับ props:
// - imageUrl: รูปภาพของอสังหาฯ
// - code: รหัสอสังหาฯ
// - title: ชื่ออสังหาฯ (เช่น Condo เฟอร์นิเจอร์)
// - location: สถานที่ตั้ง
// - price: ราคา
function PropertyCard({ imageUrl, code, title, location, price }) {
  const Cardcon = "w-[280px] h-[350px] bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
  
  return (
    <div className={Cardcon}> 
      
      {/* --- รูปภาพ --- */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-4 space-y-2">
        <div>
          <p className="text-base font-medium text-gray-900">
            {code} ให้เช่า
          </p>
          <h3 className="text-base font-medium text-gray-900 mt-1">
            {title}
          </h3>
        </div>
        
        <div className="flex text-base gap-2 items-center">
          <IoIosPin />
          <span className="text-gray-700">
            {location}
          </span>
        </div>
        
        <div>
          <p className="text-xl font-bold text-gray-900">
            ฿ {price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;