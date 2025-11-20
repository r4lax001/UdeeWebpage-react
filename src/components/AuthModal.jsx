import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { useAuth } from '../context/AuthContext';
import BusinessImage from "../assets/img/businessimg.png";

// Login Component
const Login = ({ onToggle, onClose }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');

    if (!formData.email || !formData.password) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // สร้าง user data
    const userData = {
      email: formData.email,
      username: formData.email.split('@')[0],
      loginTime: new Date().toISOString()
    };

    // เรียกใช้ login function จาก context
    login(userData);
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white max-w-[1560px] w-full h-full max-h-[848px] rounded-xl shadow-2xl flex overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 transition-colors"
      >
        <X size={28} />
      </button>

      <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-20">
        <div className="max-w-[557px] mx-auto w-full"> 
          <h1 className="text-3xl font-semibold text-[#5C6063] mb-7">Login</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-[#5C6063] text-base mb-1">Email</label>
              <input 
                className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]"
                type="email" 
                placeholder="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-[#5C6063] text-base mb-1">Password</label>
              <input  
                className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]"
                type="password" 
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                onKeyPress={handleKeyPress}
              />
            </div>

            <a className="text-[#4797D4] text-right mt-2 hover:underline cursor-pointer">Forget password</a>

            <button 
              onClick={handleSubmit}
              className="w-full h-[59px] bg-[#976FC8] text-white rounded-xl flex items-center justify-center font-semibold text-xl mt-4 hover:bg-[#B294D6] transition duration-150"
            >
              Login
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t-2 border-[#D5D5D5]"></div>
            <p className="text-[#D5D5D5] text-sm">or connect with</p>
            <div className="flex-1 border-t-2 border-[#D5D5D5]"></div>
          </div>

          <button className="w-full h-[59px] bg-[#FFFFFF] border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 hover:bg-gray-50 transition duration-150">
            <span className="text-gray-500">Social Login</span>
          </button>
          
          <p className="flex justify-center gap-1 text-[#5C6063]">
            Don't have account yet 
            <span 
              className="text-[#4797D4] underline hover:text-blue-700 cursor-pointer" 
              onClick={() => onToggle('register')}
            >
              Register
            </span>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
        <img 
          src={BusinessImage} 
          alt="Business Center Building" 
          className="max-w-[698px] w-full h-auto object-contain p-8"
        />
      </div>
    </div>
  );
};

// Register Component
const Register = ({ onToggle, onClose }) => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน');
      return;
    }

    if (!formData.agreeTerms) {
      setError('กรุณายอมรับเงื่อนไขการใช้งาน');
      return;
    }

    const userData = {
      email: formData.email,
      username: formData.username,
      userType: formData.userType,
      loginTime: new Date().toISOString()
    };

    register(userData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white max-w-[1560px] w-full h-full max-h-[848px] rounded-xl shadow-2xl flex overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 transition-colors"
      >
        <X size={28} />
      </button>

      <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-20">
        <div className="max-w-[557px] mx-auto w-full">
          <h1 className="text-3xl font-semibold text-[#5C6063] mb-4">Register</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-[#5C6063] text-base mb-1">Username</label>
              <input 
                className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]"
                type="text" 
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-[#5C6063] text-base mb-1">Email</label>
              <input 
                className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]"
                type="email" 
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between gap-4"> 
              <div className="flex flex-col flex-1"> 
                <label className="font-semibold text-[#5C6063] text-base mb-1">Password</label>
                <input  
                  className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]" 
                  type="password" 
                  name="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex flex-col flex-1"> 
                <label className="font-semibold text-[#5C6063] text-base mb-1">Confirm password</label>
                <input  
                  className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#378ED0]" 
                  type="password" 
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="font-semibold text-[#5C6063] text-base mb-1">User Type</label>
              <select 
                className="w-full h-[59px] border-2 border-gray-300 rounded-xl px-4 text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#378ED0]"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="">user type</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                name="agreeTerms"
                className="w-4 h-4 accent-[#378ED0] focus:ring-[#378ED0]"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label className="text-[#5C6063]">
                I agree to the <span className="text-[#4797D4] hover:underline cursor-pointer">Terms of Privacy Policy</span>
              </label>
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full h-[59px] bg-[#976FC8] text-white rounded-xl flex items-center justify-center font-semibold text-xl mt-4 hover:bg-[#B294D6] transition duration-150"
            >
              Register
            </button>
          </div>
          
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t-2 border-[#D5D5D5]"></div>
            <p className="text-[#D5D5D5] text-sm">or connect with</p>
            <div className="flex-1 border-t-2 border-[#D5D5D5]"></div>
          </div>

          <button className="w-full h-[59px] bg-[#FFFFFF] border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 hover:bg-gray-50 transition duration-150">
            <span className="text-gray-500">Social Register</span>
          </button>
          
          <p className="flex justify-center gap-1 text-[#5C6063]">
            Already have account?
            <span 
              className="text-[#4797D4] underline hover:text-blue-700 cursor-pointer" 
              onClick={() => onToggle('login')} 
            >
              Login
            </span>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
        <img 
          src={BusinessImage} 
          alt="Business Center Building" 
          className="max-w-[698px] w-full h-auto object-contain p-8"
        />
      </div>
    </div>
  );
};

// Auth Modal Component
const AuthModal = ({ isOpen, onClose, initialView = 'login' }) => {
  const [currentView, setCurrentView] = useState(initialView);

  useEffect(() => {
    setCurrentView(initialView);
  }, [initialView]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all"
          onClick={onClose}
        />
        
        <div className="relative z-10 w-full max-w-[1560px] max-h-[90vh] overflow-auto animate-scaleIn">
          {currentView === 'login' ? (
            <Login onToggle={setCurrentView} onClose={onClose} />
          ) : (
            <Register onToggle={setCurrentView} onClose={onClose} />
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;