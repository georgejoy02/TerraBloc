import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/owner/RegisterAdmin";
import { Login } from "./pages/Login";
import LoginPage from "./pages/LoginOptions";
import Admin from "./pages/admin/Admin";
import RegisterUser from "./pages/RegisterUser";
import './App.css';
import TransferOwnershipFinal from "./pages/admin/FinalTransferOwnership";
import Map from "./pages/user/Map";
import Owner from "./pages/owner/Owner";


export default function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<TransferOwnershipFinal />} />
          <Route path="*" element={<LandDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/landgallery" element={<LandGallery />} /> */}
          <Route path="/userdashboard" element={<User />} />
          <Route path="/landgallery" element={<Owner/>} />
          <Route path="/loginoption" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registeruser" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}