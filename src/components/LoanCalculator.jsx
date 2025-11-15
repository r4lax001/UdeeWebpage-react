import React, { useState } from 'react';

// --- คอมโพเนนต์ย่อยสำหรับช่อง Input (เพื่อลดโค้ดซ้ำ) ---
const InputBox = ({ label, value, onChange, prefix, suffix }) => (
  <div>
    <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
    <div className="relative">
      {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</span>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border border-gray-300 p-3 text-right font-medium text-base ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''}`}
      />
      {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">{suffix}</span>}
    </div>
  </div>
);

// --- คอมโพเนนต์หลัก ---
function LoanCalculator() {

  // --- State สำหรับเก็บค่า Input ---
  const [priceStr, setPriceStr] = useState("15,990,000");
  const [loanStr, setLoanStr] = useState("14,391,000");
  const [rateStr, setRateStr] = useState("3");
  const [termStr, setTermStr] = useState("30");

  // --- ฟังก์ชันคำนวณ ---
  const calculateLoan = () => {
    const price = parseFloat(priceStr.replace(/,/g, '')) || 0;
    const P = parseFloat(loanStr.replace(/,/g, '')) || 0; // P = ยอดสินเชื่อ
    const rate = parseFloat(rateStr) || 0;
    const term = parseFloat(termStr) || 0;

    if (P === 0 || rate === 0 || term === 0) {
      return { monthlyPayment: 0, principal: 0, interest: 0, downPayment: 0, ltv: 0, loanAmount: 0 };
    }

    const downPayment = price - P;
    const ltv = (P / price) * 100;
    const r = (rate / 100) / 12; // อัตราดอกเบี้ยต่อเดือน
    const n = term * 12; // จำนวนงวดทั้งหมด

    // สูตรคำนวณผ่อนบ้าน: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyPayment = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    if (!isFinite(monthlyPayment)) {
      return { monthlyPayment: 0, principal: 0, interest: 0, downPayment, ltv, loanAmount: P };
    }

    const interest = P * r; // ดอกเบี้ย (งวดแรก)
    const principal = monthlyPayment - interest; // เงินต้น (งวดแรก)

    return { monthlyPayment, principal, interest, downPayment, ltv, loanAmount: P };
  };

  // --- เรียกใช้ฟังก์ชันคำนวณ ---
  const loanData = calculateLoan();
  const principalPercent = (loanData.principal / loanData.monthlyPayment) * 100 || 0;
  const interestPercent = 100 - principalPercent;

  // --- ฟังก์ชัน Format ตัวเลข ---
  const formatNum = (num) => num.toLocaleString('th-TH', { maximumFractionDigits: 0 });

  return (
    <div className="container max-w-[1572px] mx-auto px-4 mt-20">
      <hr className="border-gray-200 mb-10" />
      <h2 className="text-[28px] md:text-[32px] font-medium mb-6">ยอดสินเชื่อโดยประมาณ</h2>

      {/* แบ่ง 3 ส่วน: 2 ส่วนสำหรับผลลัพธ์ (ซ้าย), 1 ส่วนสำหรับ Input (ขวา) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

        {/* --- ส่วนผลลัพธ์ (ซ้าย) --- */}
        <div className="md:col-span-2 space-y-8">

          {/* 1. รายละเอียดสินเชื่อ (ผ่อนต่อเดือน) */}
          <div>
            <p className="text-base md:text-lg font-medium text-gray-800">รายละเอียดสินเชื่อ</p>
            <p className="text-sm text-gray-500 mb-1">ยอดสินเชื่อที่ต้องชำระต่อเดือนโดยประมาณ</p>
            <p className="text-2xl md:text-[28px] font-medium text-gray-900 mb-3">
              ฿ {formatNum(loanData.monthlyPayment)} / เดือน
            </p>

            {/* กราฟแท่ง */}
            <div className="flex w-full h-3 rounded-full overflow-hidden bg-gray-200 mb-2">
              <div
                className="bg-blue-500"
                style={{ width: `${principalPercent}%` }}
                title="เงินต้น"
              ></div>
              <div
                className="bg-teal-500"
                style={{ width: `${interestPercent}%` }}
                title="ดอกเบี้ย"
              ></div>
            </div>
            {/* คำอธิบายกราฟ */}
            <div className="flex justify-between text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                ฿ {formatNum(loanData.principal)} เงินต้น
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                ฿ {formatNum(loanData.interest)} ดอกเบี้ย
              </span>
            </div>
          </div>

          <hr />

          {/* 2. ค่าใช้จ่ายเบื้องต้น (เงินดาวน์) */}
          <div>
            <p className="text-base md:text-lg font-medium text-gray-800">ค่าใช้จ่ายที่อาจต้องมีเบื้องต้น</p>
            <p className="text-sm text-gray-500 mb-1">เงินดาวน์ทั้งหมด</p>
            <p className="text-2xl md:text-[28px] font-medium text-gray-900 mb-3">
              ฿ {formatNum(loanData.downPayment)}
            </p>
            {/* กราฟแท่ง */}
            <div className="w-full h-3 rounded-full overflow-hidden bg-gray-200 mb-2">
              <div className="bg-blue-500" style={{ width: '100%' }}></div>
            </div>
            {/* คำอธิบายกราฟ */}
            <div className="flex justify-between text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                เงินดาวน์
              </span>
              <span className="text-xs md:text-sm">
                จำนวนสินเชื่อ ฿ {formatNum(loanData.loanAmount)} ในอัตรา
                {loanData.ltv.toFixed(0)}% ของสินเชื่อต่อราคาบ้าน (Loan-to-value)
              </span>
            </div>
          </div>
        </div>

        {/* --- ส่วน Input (ขวา) --- */}
        <div className="space-y-4">
          <InputBox
            label="ราคาสังหาฯ"
            prefix="฿"
            value={priceStr}
            onChange={(e) => setPriceStr(e.target.value)}
          />
          <InputBox
            label="ยอดสินเชื่อ"
            prefix="฿"
            value={loanStr}
            onChange={(e) => setLoanStr(e.target.value)}
          />
          <InputBox
            label="อัตราดอกเบี้ย"
            prefix="%"
            value={rateStr}
            onChange={(e) => setRateStr(e.target.value)}
          />
          <InputBox
            label="ระยะเวลา"
            suffix="ปี"
            value={termStr}
            onChange={(e) => setTermStr(e.target.value)}
          />

          <button className="w-full py-3 mt-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            คำนวณอีกครั้ง
          </button>
        </div>

      </div>
    </div>
  );
}

export default LoanCalculator;