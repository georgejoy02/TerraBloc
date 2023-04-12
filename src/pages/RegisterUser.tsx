import * as React from "react";
import { AppBar, Toolbar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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

const RegisterUser: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<number | null>(null);
  const [address, setAddress] = React.useState<string>("");
  const [aadhar, setAadhar] = React.useState<string>("");
  const [pan, setPan] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [aadharDoc, setAadharDoc] = React.useState<File | null>(null);

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
      <Box>
        <AppBar
          position="fixed" 
        // sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" textAlign='center' noWrap component="div">
              Register User
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container maxWidth="md">
          {/* <Box mt={6} mb={2}>
            <Typography
              variant="h4"
              align="center"
              fontWeight={"bold"}
              sx={{ color: "#6D6D6D" }}
            >
              User Registration
            </Typography>
          </Box> */}
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