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
import ConfirmPaymentPopup from "./components/ConfirmPayementPopup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<TransferOwnershipFinal />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landgallery" element={<LandGallery />} />
          <Route path="/loginoption" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registeruser" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
      {/* <ConfirmPaymentPopup open={true} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } userAddress1={"5y8d75yd8437mxtm3387436473453c4t3847ty8374tc34t7"} userAddress2={"wciurown3i4u837ywehf27487382725728782kfjnkw4d5"} totalAmountInRupees={"50000"} ethValue={"329172.34"} totalAmountInEth={"1.52342456"} /> */}
    </div>
  )
}