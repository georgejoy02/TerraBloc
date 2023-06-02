import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Dashboard,
  Person as PersonIcon,
  FactCheck,
  Logout,
  TransferWithinAStationRounded,
  VerifiedUser,
} from "@mui/icons-material";
import LandInDashboard from "../pages/AdminDashboard";
import { useState } from "react";
import VerifyUser from "../pages/AdminVerifyUser";
import { AdminVerifyLand } from "../pages/AdminVerifyLand";
import TransferOwnership from "../pages/TransferOwnership";
import { useNavigate } from "react-router-dom";
import { Appbar } from "./Appbar";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const menuItems = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      component: <LandInDashboard />,
      onClick: () => setSelectedItem("Dashboard"),
    },
    {
      label: "Verify User",
      icon: <VerifiedUser />,
      component: <VerifyUser />,
      onClick: () => setSelectedItem("Verify User"),
    },
    {
      label: "Verify Land",
      icon: <FactCheck />,
      component: <AdminVerifyLand />,
      onClick: () => setSelectedItem("Verify Land"),
    },
    {
      label: "Transfer Ownership",
      icon: <TransferWithinAStationRounded />,
      component: <TransferOwnership />,
      onClick: () => setSelectedItem("Transfer Ownership"),
    },
    {
      label: "Logout",
      icon: <Logout />,
      onClick: () => navigate("/"),
    },
  ];

    const renderComponent = () => {
    const menuItem = menuItems.find((item) => item.label === selectedItem);
    return menuItem ? menuItem.component : null;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" textAlign='center' noWrap component="div">
            LandInspector
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Appbar 
      title="Land Inspector" /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
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
            User Name
          </Typography>
        </Box>
        <Divider />
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
        {menuItems.map(({ label, component }) => {
          if (selectedItem === label) {
            return component;
          }
        })}
      </Box>
    </Box>
  );
}
