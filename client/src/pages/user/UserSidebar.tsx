import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Person as PersonIcon,
  Logout,
  Landscape,
  RequestPage

} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
// import UserDashboard from "../pages/UserDashboard";
import LandGallery from "../user/LandGallery";
import MyLands from "../user/MyLands";
import MyReceivedRequests from "../user/MyReceivedRequests";
import MySentLandRequests from "../user/MySentLandRequests";
import UserDashboardContent from "../user/UserDashboardContent";
import AddLands from "./AddLands";

const drawerWidth = 240;
const UserSidebar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const menuItems = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      component: <UserDashboardContent />,
      onClick: () => setSelectedItem("Dashboard"),
    },
    {
      label: "Land Gallery",
      icon: <Landscape />,
      component: <LandGallery />,
      onClick: () => setSelectedItem("Land Gallery"),
    },
    {
      label: "Add Land",
      icon: <Landscape />,
      component: <AddLands />,
      onClick: () => setSelectedItem("Add Land"),
    },
    {
      label: "My Lands",
      icon: <Landscape />,
      component: <MyLands />,
      onClick: () => setSelectedItem("My Lands"),
    },
    {
      label: "My Received Request",
      icon: <RequestPage />,
      component: <MyReceivedRequests />,
      onClick: () => setSelectedItem("My Received Request"),
    },
    {
      label: "My Sent Land Request",
      icon: <RequestPage />,
      component: <MySentLandRequests />,
      onClick: () => setSelectedItem("My Sent Land Request"),
    },
    {
      label: "Logout",
      icon: <Logout />,
      onClick: () => navigate("/"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
        }}
      >
        <Toolbar>
          <Typography variant="h6" textAlign='center' noWrap component="div">
            User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: 240, backgroundColor: "#E6F7FF" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
          mb={-4}
        >
          <PersonIcon sx={{ mr: 1, fontSize: 70 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ mr: 1, fontSize: 25 }}
          >
            User Dashboard
          </Typography>
        </Box>
        <List>
          {menuItems.map(({ label, icon, onClick }) => (
            <ListItem button key={label} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "42px",
          bgcolor: "background.default",
          paddingTop: 3,
        }}
      >
        {menuItems.map(({ label, component }) =>
          selectedItem === label ? component : null
        )}
      </Box>
    </Box >

  );
};

export default UserSidebar;