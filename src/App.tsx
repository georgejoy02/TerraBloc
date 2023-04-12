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

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landgallery" element={<LandGallery />} />
          <Route path="/loginop" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}