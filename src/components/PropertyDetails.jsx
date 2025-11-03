import React from 'react';
import { FaBuilding, FaBed, FaCar, FaTag } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { BsTextareaResize } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-5">
    <span className="text-gray-700 text-[32px] mt-0.5">{icon}</span>
    <div>
      <p className="text-[20px] text-gray-600">{label}</p>
      {value && <p className="font-medium text-gray-900 text-[24px]">{value}</p>}
    </div>
  </div>
);

function PropertyDetails() {
  const details = {
    projectName: "Happy Condo Ratchada 18",
    address: "สามเสนนอก, ห้วยขวาง, กรุงเทพมหานคร",
    size: "40",
    floor: "4",
    bedrooms: "1",
    bathrooms: "1",
    parking: "1",
    type: "เช่า"
  };

  return (
    <div className="container max-w-[1500px] mx-auto px-4 py-8">

      <div className='grid grid-cols-2 gap-20'>
        <div className="grid grid-cols-1  gap-10 ">
          <DetailItem
            icon={<FaBuilding />}
            label="ชื่อโครงการ"
            value={details.projectName}
          />
          <DetailItem
            icon={<IoIosPin />}
            label="ที่อยู่"
            value={details.address}
          />
        </div>
        <div className="grid grid-cols-3 gap-20">

          <DetailItem
            icon={<BsTextareaResize />}
            label="ขนาด"
            value={details.size}
          />
          <DetailItem
            icon={<FaLayerGroup />}
            label="ชั้น"
            value={details.floor}
          />
          <DetailItem
            icon={<FaBed />}
            label="ห้องนอน"
            value={details.bedrooms}
          />

          <DetailItem
            icon={<MdBathtub />}
            label="ห้องน้ำ"
            value={details.bathrooms}
          />
          <DetailItem
            icon={<FaCar />}
            label="ที่จอดรถ"
            value={details.parking}
          />
          <DetailItem
            icon={<FaTag />}
            label={details.type}
            value={null}
          />
        </div>
      </div>

    </div>
  );
}

export default PropertyDetails;