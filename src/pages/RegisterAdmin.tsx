import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";
// import {
//   AddBox as AddBoxIcon,
//   FormatListBulleted as FormatListBulletedIcon,
//   PowerSettingsNew as PowerSettingsNewIcon,
//   Person as PersonIcon,
// } from "@mui/icons-material";

const RegisterAdmin = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Main Content */}
      <Box
        component="form"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
        onSubmit={handleSubmit}
      >
        <Stack
          spacing={4}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Typography variant="h4" mb={3}>
            Register Admin
          </Typography>
          <Box mb={2}>
            <TextField label="Address" sx={{ width: "600px" }} />
          </Box>

          <Box mb={2}>
            <TextField label="Name" sx={{ width: "600px" }} />
          </Box>

          <Box>
            <TextField label="Age" sx={{ width: "600px" }} />
          </Box>

          <Box mb={2}>
            <TextField label="Designation" sx={{ width: "600px" }} />
          </Box>

          <Box mb={2}>
            <TextField label="City" sx={{ width: "600px" }} />
          </Box>
          <Stack>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RegisterAdmin;
