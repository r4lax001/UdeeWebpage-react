import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import AppLayouts from "./layouts/AppLayouts";
import UserProfilePage from "./Page/UserProfilePage";
import Salepage from "./Page/Salepage";
import Rentpage from "./Page/Rentpage";

// DEV - 2 (ForSales Pages)
import PropertyInfo from "./Pages/Forsales/PropertyInfo";
import PropertyOwnerInfo from "./Pages/Forsales/PropertyOwnerInfo";

// Auth Context
import { AuthProvider } from "./context/AuthContext";

// DEV - 3 (Login & Register)
// import Login from "./Page/login/Login"
// import Register from "./Page/login/Register"

// DEV - 4 (Home Page)
import Home from "./Page/home/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Home Page - Main Landing */}
          <Route path="/" element={<Home />} />

          {/* Main Layout Routes */}
          <Route path="/app" element={<AppLayouts />}>
            <Route index element={<Rentpage />} />
            <Route path="/app/salepage" element={<Salepage />} />
            <Route path="/app/rentpage" element={<Rentpage />} />
          </Route>

          {/* Profile Page */}
          <Route path="/profile" element={<UserProfilePage />} />

          {/* ForSales Routes */}
          <Route path="/forsales/propertyinfo" element={<PropertyInfo />} />
          <Route path="/forsales/propertyownerinfo" element={<PropertyOwnerInfo />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;