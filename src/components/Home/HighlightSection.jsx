import React from 'react';

// รับ props: title และ items (รายการรูปภาพและหัวข้อ)
const HighlightSection = ({ title, items, marginTop = '60px' }) => {
  return (
    <div>
      <h2 className="section-title" style={{ marginTop: marginTop }}>{title}</h2>
      <div className="highlight-grid">
        {items.map((item, index) => (
          <a href="#" className={`highlight-card ${index === 0 ? 'main' : ''}`} key={index}>
            <img src={item.img} alt={item.title} />
            <div className="text-overlay"><h3>{item.title}</h3></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HighlightSection;