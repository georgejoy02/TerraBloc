import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Person as PersonIcon,
  Logout,
  Landscape,
  RequestPage,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { ListItemButton } from "@mui/material";

const drawerWidth = 240;

const UserSidebar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const menuItems = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      onClick: () => {
        setSelectedItem("Dashboard");
        navigate("");
      },
    },
    {
      label: "Land Gallery",
      icon: <Landscape />,
      onClick: () => {
        setSelectedItem("Land Gallery");
        navigate("landgallery");
      },
    },
    {
      label: "Add Land",
      icon: <Landscape />,
      onClick: () => {
        setSelectedItem("Add Land");
        navigate("addland");
      },
    },
    {
      label: "My Lands",
      icon: <Landscape />,
      onClick: () => {
        setSelectedItem("My Lands");
        navigate("mylands");
      },
    },
    {
      label: "My Received Request",
      icon: <RequestPage />,
      onClick: () => {
        setSelectedItem("My Received Request");
        navigate("receivedreq");
      },
    },
    {
      label: "My Sent Land Request",
      icon: <RequestPage />,
      onClick: () => {
        setSelectedItem("My Sent Land Request");
        navigate("sentreq");
      },
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
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" textAlign="center" noWrap component="div">
            User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{ width: 240, backgroundColor: "#E6F7FF" }}
      >
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
            <ListItemButton key={label} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
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
      ></Box>
    </Box>
  );
};

export default UserSidebar;
