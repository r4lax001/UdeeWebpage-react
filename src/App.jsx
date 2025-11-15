import { Routes, Route } from "react-router-dom"
import './index.css'
import AppLayouts from "./layouts/AppLayouts"
import AppHeader from './Page/AppHeader'
import PropertyImageCollage from './components/PropertyImageCollage'
import PropertyDetails from './components/PropertyDetails'
import LoanCalculator from './components/LoanCalculator'
import UserProfilePage from "./Page/UserProfilePage"
import AppMixmap from "./layouts/AppMixmap"
import RelatedProperties from './components/RelatedProperties'

function App() {
  const mapEmbedUrl = "http://googleusercontent.com/maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.805352377045!2d100.5835078748366!3d13.78377789531101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d007c6f01df%3A0xe546a3D25f3c9617!2sHappy%20Condo%20Rachada%2018!5e0!3m2!1sen!2sth!4v1729809153545!5m2!1sen!2sth"
  
  return (
    <>
      <Routes>
        {/* AppLayouts ครอบทุก Route - มี Navbar และ Footer */}
        <Route path="/" element={<AppLayouts />}>
          {/* Route 1: หน้าหลัก (แสดงรายละเอียดอสังหาฯ) */}
          <Route 
            index 
            element={
              <>
                <PropertyImageCollage />
                <AppHeader />
                <PropertyDetails />
                <AppMixmap mapEmbedUrl={mapEmbedUrl} />
                <LoanCalculator />
                <RelatedProperties />
              </>
            } 
          />
          
          {/* Route 2: หน้าโปรไฟล์ */}
          <Route path="profile/*" element={<UserProfilePage />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App