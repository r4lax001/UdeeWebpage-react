import React from "react";

import PropertyImageCollage from "../components/inSalepage/PropertyImageCollage";
import Header from "../components/inSalepage/Header";
import PropertyDetails from "../components/inSalepage/PropertyDetails";
import AppMixmap from "../components/inSalepage/AppMixmap";
import LoanCalculator from "../components/LoanCalculator";
import RelatedProperties from "../components/RelatedProperties";

function Salepage() {
    const mapEmbedUrl = "http://googleusercontent.com/maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.805352377045!2d100.5835078748366!3d13.78377789531101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d007c6f01df%3A0xe546a3D25f3c9617!2sHappy%20Condo%20Rachada%2018!5e0!3m2!1sen!2sth!4v1729809153545!5m2!1sen!2sth"
  
  return (
    <>
      <PropertyImageCollage />
      <Header />
      <PropertyDetails />
      <AppMixmap mapEmbedUrl={mapEmbedUrl} />
      <LoanCalculator />
      <RelatedProperties />
    </>
  );
}

export default Salepage;
