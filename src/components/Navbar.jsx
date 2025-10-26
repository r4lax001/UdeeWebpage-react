import React from 'react'
import { Routes, Link } from "react-router-dom";

import { IoIosLock } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { GrContact } from "react-icons/gr";


function Navbar() {


    // ตกเเต่งปุ่มตรงนี้เด้อจ้าา
    const btnNavStyle = "flex items-center justify-center gap-x-1.5 bg-white text-[#000000] font-medium py-2 px-5 rounded-full  transform transition-all duration-200  hover:shadow-lg active:scale-95";

    return (
        <>
            <div className='bg-[#AF8FE9] shadow-lg'>
                <div className='container max-w-[1773px] mx-auto h-20 px-4'>
                    <div className='flex justify-between items-center h-full'>

                        <Link to="/" className='text-[40px] font-semibold text-white drop-shadow-md'>UDee</Link>

                        <div className='flex items-center gap-x-3'>

                            <Link to="">
                                <button className={btnNavStyle}>
                                    คู่มือการใช้งาน
                                </button>
                            </Link>
                            <Link to="">
                                <button className={btnNavStyle}>
                                    <FiPlus size={20} />
                                    ลงขาย
                                </button>
                            </Link>

                            <Link to="">
                                <button className={btnNavStyle}>
                                    <GrContact size={18} />
                                    ติดต่อเรา
                                </button>
                            </Link>

                            <Link to="">
                                <button className={btnNavStyle}>
                                    <IoIosLock size={20} />
                                    เข้าสู่ระบบ/สมัครสมาชิก
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar