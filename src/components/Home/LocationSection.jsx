import React from 'react';

const LocationSection = () => {
  const locations = [
    { name: 'อโศก', img: './src/assets/img/Asok.png' },
    { name: 'พระราม 9', img: './src/assets/img/Rama9.png' },
    { name: 'ทองหล่อ', img: './src/assets/img/Tonglor.png' },
    { name: 'พร้อมพงษ์', img: './src/assets/img/Prompong.png' }
  ];

  return (
    <div>
      <h2 className="section-title">ทำเลยอดนิยม</h2>
      <div className="location-grid">
        {locations.map((loc, index) => (
          <div className="location-card" key={index}>
            <span className="location-tag">{loc.name}</span>
            <img src={loc.img} alt={loc.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;