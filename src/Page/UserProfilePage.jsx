import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- Import ไอคอน ---
import { 
  FaUserCircle, FaPen, FaRegFileAlt, FaRegHeart, 
  FaBullhorn, FaRegLifeRing, FaSignOutAlt 
} from "react-icons/fa";

// --- คอมโพเนนต์ย่อย: รายการเมนูซ้ายมือ ---
const SidebarMenuItem = ({ icon, text, to, active, onClick }) => {
  const baseClasses = "flex items-center gap-4 p-4 rounded-lg transition-colors duration-200";
  const activeClasses = "bg-[#AF8FE9] text-white font-semibold";
  const inactiveClasses = "text-gray-700 hover:bg-gray-200";

  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

// --- คอมโพเนนต์ย่อย: แถวข้อมูลในบัตร ---
const InfoRow = ({ label, value }) => (
  <div className="py-2">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-medium text-gray-900">{value || '-'}</p>
  </div>
);


// --- คอมโพเนนต์หลักของหน้า ---
function UserProfilePage() {
  
  // --- State ---
  // state สำหรับเมนูที่ถูกเลือก
  const [activeMenu, setActiveMenu] = useState('profile');

  // --- ข้อมูลจำลอง (Mock Data) ---
  // ในการใช้งานจริง ข้อมูลนี้จะมาจาก props หรือ API
  const [user, setUser] = useState({
    username: "Username",
    id: "ID:XXXXX",
    name: "Jubpong Umami",
    userid_detail: null, // ใช้ null หรือ undefined เพื่อแสดง '-'
    rank: null,
    email: "JubpongU@gmail.com",
    avatarUrl: null // ใช้ null เพื่อแสดงไอคอนเริ่มต้น
  });

  const navigate = useNavigate();

  // --- ฟังก์ชันสำหรับ Backend ---
  const handleLogout = () => {
    // ใส่ Logic การ Logout (เช่น ลบ token, เรียก API) ที่นี่
    console.log("Logging out...");
    // navigate('/login');
  };

  const handleEditProfile = () => {
    // ใส่ Logic เพื่อไปหน้าแก้ไขโปรไฟล์
    console.log("Navigating to edit profile...");
    // navigate('/profile/edit');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* --- 1. Sidebar (เมนูด้านซ้าย) --- */}
      <aside className="w-80 bg-white shadow-md p-6 flex flex-col">
        
        {/* ส่วนโปรไฟล์ย่อ (ด้านบน) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            {user.avatarUrl ? 
              <img src={user.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover"/> :
              <FaUserCircle size={40} className="text-gray-500" />
            }
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{user.username}</h2>
              <button className="text-gray-500 hover:text-purple-main">
                <FaPen size={14} />
              </button>
            </div>
            <p className="text-sm text-gray-500">{user.id}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <SidebarMenuItem 
            icon={<FaRegFileAlt size={20} />} 
            text="ประกาศล่าสุด" 
            to="/profile/latest"
            active={activeMenu === 'latest'}
            onClick={() => setActiveMenu('latest')}
          />
          <SidebarMenuItem 
            icon={<FaRegHeart size={20} />} 
            text="ประกาศที่ถูกใจ" 
            to="/profile/liked"
            active={activeMenu === 'liked'}
            onClick={() => setActiveMenu('liked')}
          />
          <SidebarMenuItem 
            icon={<FaBullhorn size={20} />} 
            text="ประกาศของฉัน" 
            to="/profile/myposts"
            active={activeMenu === 'myposts'}
            onClick={() => setActiveMenu('myposts')}
          />
          <SidebarMenuItem 
            icon={<FaRegLifeRing size={20} />} 
            text="ช่วยเหลือ" 
            to="/help"
            active={activeMenu === 'help'}
            onClick={() => setActiveMenu('help')}
          />
        </nav>

        {/* ส่วนออกจากระบบ (ล่างสุด) */}
        <div className="mt-auto pt-6 border-t">
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-4 p-4 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 w-full transition-colors duration-200"
          >
            <FaSignOutAlt size={20} />
            <span className="font-medium">ออกจากระบบ</span>
          </button>
        </div>
      </aside>

      {/* --- 2. Main Content (ส่วนข้อมูลขวา) --- */}
      <main className="flex-1 p-10 bg-[#F4F0FF]">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">ข้อมูลส่วนตัว</h1>
        
        {/* การ์ดข้อมูลสีขาว */}
        <div className="bg-white rounded-2xl shadow-lg max-w-2xl p-8">
          
          {/* Avatar ใหญ่ */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              {user.avatarUrl ? 
                <img src={user.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover"/> :
                <FaUserCircle size={80} className="text-gray-400" />
              }
            </div>
          </div>
          
          {/* รายละเอียด */}
          <div className="space-y-3">
            <InfoRow label="ชื่อ - นามสกุล" value={user.name} />
            <InfoRow label="Userid" value={user.userid_detail} />
            <InfoRow label="Rank" value={user.rank} />
            <InfoRow label="อีเมล" value={user.email} />
          </div>

          {/* ปุ่มแก้ไข */}
          <button 
            onClick={handleEditProfile}
            className="w-full mt-8 py-3 px-6 bg-[#AF8FE9] text-white font-semibold rounded-lg shadow-md hover:bg-purple-main transition-colors duration-200"
          >
            แก้ไขข้อมูล
          </button>
        </div>
      </main>

    </div>
  );
}

export default UserProfilePage;