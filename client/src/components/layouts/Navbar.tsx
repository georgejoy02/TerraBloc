import { AppBar, Toolbar, IconButton, Stack, Button, Box } from "@mui/material";
import Mainlogo from "../../images/bcIcon.svg";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#fff", zIndex: 1 }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <IconButton size="large" edge="start" aria-label="logo">
            <img src={Mainlogo} alt="MainLogo" />
          </IconButton>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button component={Link} to="/" sx={{ color: "#122f47" }}>
            Home
          </Button>
          <Button component={Link} to="/landgallery" sx={{ color: "#122f47" }}>
            LandGallery
          </Button>
          <Button component={Link} to="/news" sx={{ color: "#122f47" }}>
            News
          </Button>
          <Button component={Link} to="/contact" sx={{ color: "#122f47" }}>
            Contact
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            style={{ color: "#104775" }}
          />
          <Button
            component={Link}
            to="/loginoption"
            color="primary"
            variant="contained"
          >
            LogIn
          </Button>
          <Button
            component={Link}
            to="/registeruser"
            color="primary"
            variant="contained"
          >
            Register
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
