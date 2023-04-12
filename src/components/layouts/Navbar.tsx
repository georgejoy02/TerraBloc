import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from "@mui/material"
import Mainlogo from "../../images/bcIcon.svg"
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
      <AppBar position="static" style={{ background: '#ffffff' }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <img src={Mainlogo} alt="MainLogo" />
          </IconButton>
          <Typography variant="h4" component='div' color='primary.dark'>
            TERRAWALLET
          </Typography>
        </Box>
        <Stack direction='row' spacing={2} >
          <Button component={Link} to="/" sx={{color:"black"}}>Home</Button>
          <Button component={Link} to="/landgallery" sx={{color:"black"}}>LandGallery</Button>
          <Button component={Link} to="/news" sx={{color:"black"}}>News</Button>
          <Button component={Link} to="/contact" sx={{color:"black"}}>Contact</Button>
          <Divider orientation="vertical" flexItem  />
          <Button component={Link} to="/loginop" color='primary' variant="contained">LogIn</Button>
          <Button component={Link} to="/registeruser" color='primary' variant="contained">Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}