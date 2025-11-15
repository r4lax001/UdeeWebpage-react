import React from 'react';

const DetailSection = ({ title, children }) => (
    <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <div className="space-y-1 text-gray-700 font-medium text-base">
            {children}
        </div>
    </div>
);

function PropertyDescription() {
    return (
        <div className='flex justify-start'>
            <div className="container max-w-[1572px] mx-auto px-4 mt-10">
                <h2 className="text-[28px] md:text-[32px] font-medium mb-3">รายละเอียด</h2>
                <p className="text-lg md:text-xl text-black font-medium mb-2">
                    RC094125 ให้เช่า Condo Happy Condo Ratchada 18 ใกล้ MRT สุทธิสาร
                </p>
                
                <p className="text-base text-gray-600 font-medium">ค่าเช่า 15,000 บาท/เดือน (สัญญา 1 ปี)</p>
                <p className="text-base text-gray-600 font-medium">- ประกัน 2 เดือน ล่วงหน้า 1 เดือน</p>

                <DetailSection title="รายละเอียด :">
                    <p>- ห้องขนาด 40 ตร.ม.</p>
                    <p>- 1 ห้องนอน 1 ห้องน้ำ</p>
                    <p>- ตึก B ชั้น 4 (ทั้งหมด 8ชั้น)</p>
                    <p>- เครื่องใช้ไฟฟ้าครบครัน</p>
                    <p>- เฟอร์นิเจอร์ครบพร้อมอยู่</p>
                </DetailSection>

                <DetailSection title="สิ่งอำนวยความสะดวก :">
                    <p>สระว่ายน้ำ / ฟิตเนส / ซาวน่า / สวนหย่อม</p>
                </DetailSection>

                <DetailSection title="สถานที่สำคัญใกล้เคียง :">
                    <p>โรบินสัน / เอสพลานาด / เทสโก้ โลตัส</p>
                </DetailSection>

                <DetailSection title="Location :">
                    <p>ถนนประชาอุทิศ-เหม่งจ๋าย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร</p>
                </DetailSection>

                <DetailSection title="Contact :">
                    <p>Line: @alivar click https://line.me/R/ti/p/@180acmsu</p>
                    <p>CALL: 086-394-2897</p>
                    <p>Email: alivarestate@gmail.com</p>
                    <p>Wechat: alivar2442</p>
                </DetailSection>

                <div className="mt-6">
                    <p className="font-semibold text-black text-base">A LIVAR ESTATE CO.,LTD.</p>
                    <p className="text-gray-600 font-medium text-base">รับฝากขาย-เช่า อสังหาริมทรัพย์</p>
                </div>
            </div>
        </div>
    );
}

export default PropertyDescription;