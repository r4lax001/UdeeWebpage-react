import React from 'react';
import { FaLocationDot, FaPaw, FaBed, FaBath, FaStar, FaStarHalfStroke } from 'react-icons/fa6';

// รับ props: title (หัวข้อ), products (ข้อมูลการ์ด), isPet (เพื่อเช็คว่าต้องแสดง icon สัตว์เลี้ยงไหม)
const ProductSection = ({ title, products, isPet = false, marginTop = '50px' }) => {
  return (
    <div>
      <h2 className="section-title" style={{ marginTop: marginTop }}>{title}</h2>
      <div className="product-grid">
        {products.map((product, i) => (
          <a href="#" className="product-card" key={i}>
            <img src={product.img} className="product-img" alt="Property" />
            <div className="product-body">
              <div className="product-title">Condo Happy Condo Ratchada 18 ใกล้ MRT สุทธิสาร</div>
              <div className="product-loc">
                <FaLocationDot />
                <span>สามเสนนอก, ห้วยขวาง,<br />กรุงเทพมหานคร</span>
              </div>
              <div className="product-specs">
                {isPet && <span><FaPaw /> Pet Friendly</span>}
                <span><FaBed /> 2</span>
                {!isPet && <span><FaBath /> 1</span>}
              </div>
              <div className="product-footer">
                <div className="rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
                </div>
                <div className="price">฿ 15,000</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;