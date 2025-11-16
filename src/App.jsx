import { Routes, Route } from "react-router-dom";
import "./index.css";
import AppLayouts from "./layouts/AppLayouts";
import UserProfilePage from "./Page/UserProfilePage";
import Salepage from "./Page/Salepage";
import Rentpage from "./Page/Rentpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayouts />}>

          <Route index element={<Rentpage />} />
          <Route path="salepage" element={<Salepage />} />
          <Route path="rentpage" element={<Rentpage />} />
        </Route>

        <Route path="profile" element={<UserProfilePage />} />
        
      </Routes>
    </>
  );
}

export default App;
