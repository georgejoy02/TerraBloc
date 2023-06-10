import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/RegisterAdmin";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Pagenotfound } from "./pages/Pagenotfound";
import LandGallery from "./pages/LandGallery";
import LoginPage from "./pages/LoginOptions";
import Admin from "./pages/Admin";
import RegisterUser from "./pages/RegisterUser";
import './App.css';
import TransferOwnershipFinal from "./pages/TransferOwnershipFinal";
import RegisterAdmin from "./pages/RegisterAdmin";
import Map from "./pages/Map";


export default function App() {
  

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<TransferOwnershipFinal />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
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
      {/* <Map/> */}
    </div>
  )
}