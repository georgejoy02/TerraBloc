import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ChangeSuperAdmin = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Display confirm pop-up
    const confirmMessage = 'Are you sure you want to change the Owner?';
    const isConfirmed = window.confirm(confirmMessage);

    if (isConfirmed) {
      // Handle form submission logic here
      console.log('Submitted value:', inputValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '200px' }}>
      <Box component="form" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
        <Typography variant="h4" mb={3}>
          Change Super Admin
        </Typography>
        <TextField
          required
          type="text"
          label="New Super Admin"
          sx={{ width: '700px', mb: 2 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ChangeSuperAdmin;