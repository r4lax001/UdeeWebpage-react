import React from 'react';
import { IoIosPin } from "react-icons/io";

import Photo1 from '../assets/img/Rectangle 11.png'
import Photo2 from '../assets/img/Rectangle 12.png'
import Photo3 from '../assets/img/Rectangle 13.png'

const relatedItems = [
  {
    id: 1,
    title: 'RC093825 ให้เช่า Condo เฟอร์นิเจอร์',
    location: 'กรุงเทพมหานคร',
    price: '฿ 14,500',
    img: Photo1,
  },
  {
    id: 2,
    title: 'RC093825 ให้เช่า Condo เฟอร์นิเจอร์',
    location: 'กรุงเทพมหานคร',
    price: '฿ 14,500',
    img: Photo2,
  },
  {
    id: 3,
    title: 'RC093825 ให้เช่า Condo เฟอร์นิเจอร์',
    location: 'กรุงเทพมหานคร',
    price: '฿ 14,500',
    img: Photo3,
  },
];

function RelatedProperties() {
  return (
    <div className="container max-w-[1572px] mt-20 border-b border-t  mx-auto px-4 mb-12"><br /><br />
      <h2 className="text-2xl font-medium mb-6">สินค้าใกล้เคียง</h2>
      

      <div className="flex gap-6">
        
        {relatedItems.map((item) => (

          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <img src={item.img} className="max-w-[301px] mx-auto p-3 h-[301px] object-cover" />
            
            <div className="p-4 space-y-2">
              <h3 className="font-medium text-lg text-gray-800 truncate" title={item.title}>
                {item.title}
              </h3>
              <p className="flex items-center gap-1.5 text-sm text-black font-medium">
                <IoIosPin />
                {item.location}
              </p>
              <p className="text-xl font-bold text-black">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProperties;