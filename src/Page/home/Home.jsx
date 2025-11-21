import React, { useState } from 'react'
import '../../index.css';

import Navbar from "../../components/inappLayout/Navbar";
import Hero from '../../components/Home/Hero';
import FilterModals from '../../components/Home/FilterModals';
import LocationSection from '../../components/Home/LocationSection';
import ProductSection from '../../components/Home/ProductSection';
import HighlightSection from '../../components/Home/HighlightSection';
import Footer from '../../components/inappLayout/Footer';
import AdsCarousel from '../../components/Home/AdsCarousel';

function Home() {
    const [activeModal, setActiveModal] = useState(null);

    // Modal Logic Handlers
    const handleOpenModal = (modalId) => setActiveModal(modalId);
    const handleCloseModal = () => setActiveModal(null);
    const handleBack = (targetModal, isOpenNew = false) => {
        if (isOpenNew) {
            setActiveModal(targetModal); // กรณีเปิด Sub-modal (เช่น ราคา)
        } else if (targetModal) {
            setActiveModal(targetModal); // กรณีย้อนกลับ (Back button)
        } else {
            setActiveModal(null); // กรณีปิด Main modal
        }
    };

    // --- Mock Data (สามารถแยกไฟล์ data.js ได้ในอนาคต) ---
    const newProjects = [
        { img: "./src/assets/img/Product1.png" },
        { img: "./src/assets/img/Product2.png" },
        { img: "./src/assets/img/Product3.png" },
        { img: "./src/assets/img/Product4.png" }
    ];

    const petFriendlyProjects = [
        { img: "./src/assets/img/Pets1.png" },
        { img: "./src/assets/img/Pets2.png" },
        { img: "./src/assets/img/Pets3.png" },
        { img: "./src/assets/img/Pets4.png" }
    ];

    const articles = [
        { title: "9 จุดรับทรัพย์ในบ้าน ตามหลักฮวงจุ้ย", img: "./src/assets/img/9.png" },
        { title: "5 เทรนด์แต่งบ้าน 2023", img: "./src/assets/img/5.png" },
        { title: "ที่พักอาศัยสำหรับคนเริ่มต้นทำงาน", img: "./src/assets/img/3.png" },
        { title: "จุดเริ่มต้นของคนอยากมีบ้าน", img: "./src/assets/img/7.png" },
        { title: "ซื้อบ้านใหม่ vs สร้างบ้านเอง", img: "./src/assets/img/1.png" }
    ];

    const news = [
        { title: "“อสังหาฯ ทรุดหนัก” รัฐบาลต้องช่วย!", img: "./src/assets/img/11.png" },
        { title: "อสังหาฯ ปี 66 พลิกโฉม", img: "./src/assets/img/66.png" },
        { title: "ลงทุนธุรกิจอสังหาฯ ปี 2025", img: "./src/assets/img/25.png" },
        { title: "ตลาดอสังหาฯ ปี '68 หดตัว", img: "./src/assets/img/68.png" },
        { title: "อสังหาฯ ไทยซึมยาว", img: "./src/assets/img/10.png" }
    ];
    return (
        <div className="udee-app">
            <Navbar />

            <main>
                <Hero openModal={handleOpenModal} />

                {/* Modals Container */}
                <FilterModals
                    activeModal={activeModal}
                    closeModal={handleCloseModal}
                    handleBack={handleBack}
                />

                {/* Ads Section */}
                <AdsCarousel images={[
                    "./src/assets/img/Ads1.png",
                    "./src/assets/img/Ads2.png",
                    "./src/assets/img/Ads1.png",
                    "./src/assets/img/Ads2.png",
                    "./src/assets/img/Ads1.png"
                ]} />

                <div className="content-container container">
                    <LocationSection />

                    <ProductSection title="โครงการใหม่ล่าสุด" products={newProjects} />

                    <ProductSection title="ส่วนกลางเอาใจคนรักสัตว์" products={petFriendlyProjects} isPet={true} />

                    <HighlightSection title="บทความและสาระน่ารู้เพื่อคนอยากมีบ้าน" items={articles} />

                    <HighlightSection title="ข่าวสารในวงการอสังหาฯ" items={news} />
                </div>
            </main>

            <Footer />
        </div>
    );
};
export default Home