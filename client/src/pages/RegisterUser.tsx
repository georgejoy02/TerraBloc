import * as React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
import axios from "axios";

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
  const [address, setAddress] = useState<string>("");
  const [aadhar, setAadhar] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [aadharDoc, setAadharDoc] = useState<File | null>(null);
  const [errorMessageDoc, setErrorMessageDoc] = useState<string>("");
  const [errorMessageAadhar, setErrorMessageAadhar] = useState<string>("");
  const [errorMessagePan, setErrorMessagePan] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (aadhar.length !== 12) {
      setErrorMessageAadhar("Aadhar number should be exactly 12 digits.");
      return;
    }

    if (pan.length !== 10) {
      setErrorMessagePan("PAN number should be exactly 10 digits.");
      return;
    }

    if (!aadharDoc) {
      setErrorMessageDoc("Please upload Aadhar Document.");
      return;
    }

    try {
      const formData = new FormData();
      // formData.append("name", name);
      // formData.append("age", age?.toString() ?? "");
      // formData.append("city", address);
      // formData.append("aadharNo", aadhar);
      // formData.append("panNo", pan);
      // formData.append("email", email);
      formData.append("file", aadharDoc as File);

      const response = await axios.post("http://localhost:4000/userreg", formData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAadharDocChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setAadharDoc(event.target.files[0]);
    }
  };

  const validateAadhar = () => {
    if (aadhar.length !== 12) {
      setErrorMessageAadhar("Aadhar number must be exactly 12 digits");
    } else {
      setErrorMessageAadhar("");
    }
  };

  const validatePan = () => {
    if (pan.length !== 10) {
      setErrorMessagePan("Pan number must be exactly 10 digits");
    } else {
      setErrorMessagePan("");
    }
  };

  return (
    <div>
      <Appbar title="Register User" hideIconButton={true} />
      <Box marginTop={4}>
        <Container maxWidth="md">
          <FormContainer onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              type="text"
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
              onChange={(event) => {
                setAadhar(event.target.value);
                setErrorMessageAadhar("");
              }}
              onBlur={validateAadhar}
            />
            {errorMessageAadhar && (
              <Typography variant="body2" color="error">
                {errorMessageAadhar}
              </Typography>
            )}
            <TextField
              required
              label="Pan Number"
              value={pan}
              style={{ marginBottom: "20px" }}
              onChange={(event) => {
                setPan(event.target.value);
                setErrorMessagePan("");
              }}
              onBlur={validatePan}
            />
            {errorMessagePan && (
              <Typography variant="body2" color="error">
                {errorMessagePan}
              </Typography>
            )}
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

              {errorMessageDoc && (
                <Typography variant="body1" color="error" align="center">
                  {errorMessageDoc}
                </Typography>
              )}
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
