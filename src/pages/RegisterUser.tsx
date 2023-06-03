import * as React from "react";
import { AppBar, Toolbar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    margin: theme.spacing(2),
    width: "100%",
    maxWidth: 600,
  },
}));

const drawerWidth = 240;

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [address, setAddress] =useState<string>("");
  const [aadhar, setAadhar] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [aadharDoc, setAadharDoc] =useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleAadharDocChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setAadharDoc(event.target.files[0]);
    }
  };

  return (
    <div>
      <Appbar title='Register User'/>
      <Box marginTop={4}>
        <Container maxWidth="md">
          <FormContainer onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              value={name}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              required
              label="Age"
              type="number"
              value={age ?? ""}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setAge(parseInt(event.target.value, 10))}
            />
            <TextField
              required
              label="Address"
              value={address}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setAddress(event.target.value)}
            />
            <TextField
              required
              label="Aadhar Number"
              value={aadhar}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setAadhar(event.target.value)}
            />
            <TextField
              required
              label="Pan Number"
              value={pan}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setPan(event.target.value)}
            />
            <TextField
              required
              label="Email"
              type="email"
              value={email}
              style={{ marginBottom: "20px" }}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Box>
              <input
                accept="application/pdf,image/*"
                style={{ display: "none" }}
                id="aadhar-upload"
                type="file"
                onChange={handleAadharDocChange}
              />
              <label htmlFor="aadhar-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                  style={{ marginBottom: "20px" }}
                >
                  Upload Aadhar Document
                </Button>
              </label>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "30%" }}
            >
              Submit
            </Button>
          </FormContainer>
        </Container>
      </Box>
    </div>
  );
};

export default RegisterUser;