import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Button component={Link} to="/login" variant="contained" color="primary" size="large" sx={{ mt: 15, width: '250px', height: '50px' }}>
        Login as Super Admin
      </Button>
      <Button component={Link} to="/admin" variant="contained" color="primary" size="large" sx={{ mt: 5, width: '250px', height: '50px' }}>
        Login as Admin
      </Button>
      <Button component={Link} to="/login" variant="contained" color="primary" size="large" sx={{ mt: 5, width: '250px', height: '50px' }}>
        Login as User
      </Button>
      <Typography variant="caption" sx={{ mt: 2 }}>
        New to Terrawallet? <Link  to="/RegisterUser">Register</Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
