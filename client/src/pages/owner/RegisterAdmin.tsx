import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import Sidebar from "../../components/layouts/OwnerSidebar";
import { Appbar } from "../../components/Appbar";
import axios from "axios";

const RegisterAdmin = () => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [city, setCity] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      address: address,
      name: name,
      age: age,
      designation: designation,
      city: city,
    };

    axios
      .post("/api/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Appbar title="Super Admin Dashboard" hideIconButton={true} />
      <Sidebar />
      <Box sx={{ display: "flex" }}>
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
              <TextField
                required
                type="text"
                label="Address"
                sx={{ width: "600px" }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Box>

            <Box mb={2}>
              <TextField
                required
                type="text"
                label="Name"
                sx={{ width: "600px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box>
              <TextField
                required
                type="number"
                label="Age"
                sx={{ width: "600px" }}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Box>

            <Box mb={2}>
              <TextField
                required
                type="text"
                label="Designation"
                sx={{ width: "600px" }}
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </Box>

            <Box mb={2}>
              <TextField
                required
                type="text"
                label="City"
                sx={{ width: "600px" }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Box>
            <Stack>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default RegisterAdmin;
