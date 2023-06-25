import React from "react";
import UserSidebar from "../user/UserSidebar";
import { Route, Routes } from "react-router-dom";
import MyLands from "./MyLands";
import AddLands from "./AddLands";
import LandGallery from "./LandGallery";
import MyReceivedRequests from "./MyReceivedRequests";
import MySentLandRequests from "./MySentLandRequests";
import UserDashboardContent from "./UserDashboardContent";

const User: React.FC = () => {
  return (
    <div>
      <UserSidebar />
      <Routes>
        <Route path="/" element={<UserDashboardContent />} />
        <Route path="/addland" element={<AddLands />} />
        <Route path="/mylands" element={<MyLands />} />
        <Route path="/landgallery" element={<LandGallery />} />
        <Route path="/receivedreq" element={<MyReceivedRequests />} />
        <Route path="/sentreq" element={<MySentLandRequests />} />
      </Routes>
    </div>
  );
};

export default User;
