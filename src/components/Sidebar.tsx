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

const PermanentDrawer = () => {
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
    <Drawer variant="permanent" sx={{ width: 240, backgroundColor: '#E6F7FF' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
        mb={-4}
      >
        <PersonIcon sx={{ mr: 1, fontSize:70 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mr: 1, fontSize:25 }}>
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
export default PermanentDrawer;

// const RegisterAdmin = () => {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <PermanentDrawer />
//       <Box
//         component="form"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Stack
//           spacing={4}
//           justifyContent="center"
//           alignItems="center"
//           display="flex"
//         >
//           <Typography variant="h4" mb={3}>
//             Register Admin
//           </Typography>
//           <Box mb={2}>
//             <TextField label="Address" sx={{ width: "600px" }} />
//           </Box>

//           <Box mb={2}>
//             <TextField label="Name" sx={{ width: "600px" }} />
//           </Box>

//           <Box mb={2}>
//             <TextField label="Age" sx={{ width: "600px" }} />
//           </Box>

//           <Box mb={2}>
//             <TextField label="Designation" sx={{ width: "600px" }} />
//           </Box>

//           <Box mb={2}>
//             <TextField label="City" sx={{ width: "600px" }} />
//           </Box>

//           <Stack>
//             <Button type="submit" variant="contained" color="primary">
//               Submit
//             </Button>
//           </Stack>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterAdmin;
