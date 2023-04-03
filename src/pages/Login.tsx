import React, { useState } from "react";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import FoxImage from "../images/fox.png";
import bgImage from "../images/bgLogin.png";

import { Navbar } from "../components/layouts/Navbar"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography
          variant="subtitle2"
          color="textSecondary"
          mb={-3}
          sx={{ fontSize: "10px" }}
        >
          You can enter private key of your wallet Or you connect Metamask
          wallet
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            type={showPassword ? "text" : "password"}
            label="Private Key"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: "450px" }}
          />
        </Stack>
        <Stack>
          <Button variant="contained" sx={{ width: "250px" }}>
            Continue
          </Button>
        </Stack>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          mb={0}
          sx={{ fontSize: "10px" }}
        >
          Or Click to connect Metamask
        </Typography>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            sx={{
              height: "60px",
              width: "300px",
              //   fontWeight: "bold",
              textTransform: "none",
              fontSize: "20px",
            }}
          >
            <img
              src={FoxImage}
              alt="Fox icon"
              style={{ height: "60px", width: "60px" }}
            />
            M E T A M A S K
          </Button>
        </Stack>
      </Stack>
    </Box>
    </div>
  );
};
