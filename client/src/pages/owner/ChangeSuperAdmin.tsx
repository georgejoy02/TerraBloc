import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { SmartContractContext } from "../../utils/SmartContractContext";

const ChangeSuperAdmin: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { landContract } = useContext(SmartContractContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to change the Owner?"
    );

    if (isConfirmed) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        console.log(account);
        if (landContract) {
          const test = await landContract.methods
            .changeContractOwner(inputValue)
            .send({ from: account });
          console.log(JSON.stringify(test));
        } else {
          console.log("contract instance not found");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        paddingTop: "200px",
      }}
    >
      <Box
        component="form"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" mb={3}>
          Change Super Admin
        </Typography>
        <TextField
          required
          type="text"
          label="New Super Admin"
          sx={{ width: "700px", mb: 2 }}
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
