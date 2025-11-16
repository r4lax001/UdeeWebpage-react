import React, { useState } from "react";

import PropertyImageCollage from "../components/inSalepage/PropertyImageCollage";
import Header from "../components/inSalepage/Header";
import PropertyDetails from "../components/inSalepage/PropertyDetails";
import LoanCalculator from "../components/LoanCalculator";
import RelatedProperties from "../components/RelatedProperties";
import GoogleMapPicker from "../components/GoogleMapPicker";
import PropertyDescription from "../components/inSalepage/PropertyDescription";

function Salepage() {
  //  เก็บที่อยู่จากแผนที่
  const [mapAddress, setMapAddress] = useState("");

  //  ฟังก์ชันรับที่อยู่จาก GoogleMapPicker
  const handleAddressChange = (newAddress) => {
    setMapAddress(newAddress);
    console.log("ที่อยู่ที่เลือก:", newAddress);
  };

  return (
    <>
      <PropertyImageCollage />
      <Header />
      <PropertyDetails />

      <div className="flex max-w-[1500px]  gap-10 mx-auto">
        <PropertyDescription />
        <GoogleMapPicker
          mapAddress={mapAddress}
          onAddressChange={handleAddressChange}
        />
      </div>

      <LoanCalculator />
      <RelatedProperties />
    </>
  );
}

export default Salepage;
