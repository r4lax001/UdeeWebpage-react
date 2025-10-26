import React from 'react';

import { FaBuilding } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { BsTextareaResize, BsLayers, BsTag } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { FaCar } from "react-icons/fa";


const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <span className="text-black text-2xl mt-1">{icon}</span>
    <div>
      <p className="text-sm text-black">{label}</p>
      {value && <p className="font-medium text-gray-800 text-lg">{value}</p>}
    </div>
  </div>
);

function PropertyDetails() {
  const details = {
    projectName: "Happy Condo Ratchada 18",
    address: "สามเสนนอก, ห้วยขวาง, กรุงเทพมหานคร",
    size: "40 ตรม",
    floor: 4,
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    type: "เช่า"
  };

  return (
    <div className="container max-w-[1572px] mx-auto px-4 mt-8">
      
      <div className="flex flex-row md:flex-col gap-6 mb-6">
        <div className="flex-1">
          <DetailItem 
            icon={<FaBuilding />} 
            label="ชื่อโครงการ" 
            value={details.projectName} 
          />
        </div>
        <div className="flex-1">
          <DetailItem 
            icon={<IoIosPin />} 
            label="ที่อยู่" 
            value={details.address} 
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 mt-10">
        <DetailItem icon={<BsTextareaResize />} label="ขนาดห้อง" value={details.size} />
        <DetailItem icon={<FaLayerGroup  />} label="ชั้น" value={details.floor} />
        <DetailItem icon={<FaBed />} label="ห้องนอน" value={details.bedrooms} />
        <DetailItem icon={<MdBathtub />} label="ห้องน้ำ" value={details.bathrooms} /> {/* <-- แก้ไขชื่อตรงนี้ */}
        <DetailItem icon={<FaCar />} label="ที่จอดรถ" value={details.parking} />
        <DetailItem icon={<FaTag />} label={details.type} value={null} /> 
      </div>

    </div>
  );
}

export default PropertyDetails;