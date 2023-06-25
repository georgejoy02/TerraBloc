import { AppBar, Typography, Box } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "#ffffff" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4" component="div" color="primary.dark">
          Admin Dashboard
        </Typography>
      </Box>
    </AppBar>
  );
};
