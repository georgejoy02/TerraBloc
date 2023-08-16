import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { Navbar } from "../components/layouts/Navbar";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { ConnectMmButton } from "../components/ConnectMmButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IMyProps {
  value: string;
}

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

export const Login: React.FC<IMyProps> = (props: IMyProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [key, setKey] = useState("");

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setKey(e.target.value);
  };

  const onSubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (props.value) {
      case "user":
        try {
          const res = await axios.post("http://localhost:4000/userlogin", {
            key: key,
          });
          console.log(res);
          if (res.data == true) {
            navigate("/userdashboard");
          } else {
            alert("user not found");
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "admin":
        try {
          const res = await axios.post("http://localhost:4000/adminlogin", {
            key: key,
          });
          console.log(res);
          if (res.data == true) {
            navigate("/admin");
          } else {
            alert("address doesnt match any admin");
          }
        } catch (error) {
          console.log(error);
        }

        break;
      case "owner":
        try {
          const res = await axios.post("http://localhost:4000/ownerlogin", {
            key: key,
          });
          console.log(res);
          if (res.data == true) {
            navigate("/owner");
          } else {
            alert("you are not the contract owner");
          }
        } catch (error) {
          console.log(error);
        }

        break;
      default:
        alert("click the correct option");
    }
  };

  return (
    <div>
      <Navbar />
      <FormContainer onSubmit={onSubmitHandle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
                name="key"
                onChange={handleKeyChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "450px" }}
              />
            </Stack>
            <Stack>
              <Button variant="contained" sx={{ width: "250px" }} type="submit">
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
              <ConnectMmButton />
            </Stack>
          </Stack>
        </Box>
      </FormContainer>
    </div>
  );
};
