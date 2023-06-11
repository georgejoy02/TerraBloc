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
  AddBox as AddBoxIcon,
  FormatListBulleted as FormatListBulletedIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import RegisterAdmin from "../../pages/owner/RegisterAdmin";
import ListAdmin from "../../pages/owner/ListAdmin";
import ChangeSuperAdmin from "../../pages/owner/ChangeSuperAdmin";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Add admin");
  const menuItems = [
    {
      label: "Add admin",
      icon: <AddBoxIcon />,
      component: <RegisterAdmin />,
      onClick: () => setSelectedItem("Add admin"),
    },
    {
      label: "List admin",
      icon: <FormatListBulletedIcon />,
      component: <ListAdmin />,
      onClick: () => setSelectedItem("List admin"),
    },
    {
      label: "Change super admin",
      icon: <PersonIcon />,
      component: <ChangeSuperAdmin />,
      onClick: () => setSelectedItem("Change super admin"),
    },
    {
      label: "Logout",
      icon: <PowerSettingsNewIcon />,
      onClick: () => navigate("/"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
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
            Super Admin
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
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default Sidebar;
