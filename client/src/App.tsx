import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/owner/RegisterAdmin";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Pagenotfound } from "./pages/Pagenotfound";
import LandGallery from "./pages/user/LandGallery";
import LoginPage from "./pages/LoginOptions";
import Admin from "./pages/admin/Admin";
import RegisterUser from "./pages/RegisterUser";
import './App.css';
import TransferOwnershipFinal from "./pages/admin/FinalTransferOwnership";
import RegisterAdmin from "./pages/owner/RegisterAdmin";
import Map from "./pages/user/Map";


export default function App() {
  

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<TransferOwnershipFinal />} />
          <Route path="*" element={<Map />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/landgallery" element={<LandGallery />} /> */}
          <Route path="/landgallery" element={<RegisterAdmin/>} />
          <Route path="/loginoption" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registeruser" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}