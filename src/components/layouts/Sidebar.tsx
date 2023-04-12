import React from "react";
import {
  Box,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import {
  AddBox as AddBoxIcon,
  FormatListBulleted as FormatListBulletedIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const menuItems = [
    {
      label: "Add admin",
      icon: <AddBoxIcon />,
      onClick: () => console.log("Add admin"),
    },
    {
      label: "List admin",
      icon: <FormatListBulletedIcon />,
      onClick: () => console.log("List admin"),
    },
    {
      label: "Change super admin",
      icon: <PersonIcon />,
      onClick: () => console.log("Change super admin"),
    },
    {
      label: "Logout",
      icon: <PowerSettingsNewIcon />,
      onClick: () => console.log("Logout"),
    },
  ];

  return (
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
  );
};
export default Sidebar;