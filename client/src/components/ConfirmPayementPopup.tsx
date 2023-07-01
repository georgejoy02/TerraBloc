import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { SmartContractContext } from "../utils/SmartContractContext";

type ConfirmPaymentPopupProps = {
  open: boolean;
  onClose: () => void;
  userAddress1: string;
  userAddress2: string;
  totalAmountInRupees: string;
  ethValue: string;
  totalAmountInEth: string;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  reload: boolean;
  reqId: number;
  landPrice: string;
};

const ConfirmPaymentPopup: React.FC<ConfirmPaymentPopupProps> = ({
  open,
  onClose,
  userAddress1,
  userAddress2,
  totalAmountInRupees,
  ethValue,
  totalAmountInEth,
  setReload,
  reload,
  reqId,
  landPrice,
}) => {
  const { landContract } = useContext(SmartContractContext);

  const handleConfirm = async () => {
    const amount = parseInt(landPrice);

    try {
      if (landContract) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const test = await landContract.methods
          .makePayment(reqId)
          .send({ from: account, value: amount });
        console.log(JSON.stringify(test));
        setReload(!reload);
      } else {
        console.log("contract instance not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <DialogTitle align="center">Confirm Payment</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography align="center">{userAddress1}</Typography>
        <ArrowCircleDownIcon
          sx={{ fontSize: 40, alignSelf: "center", mt: 2 }}
        />
        <Typography align="center">{userAddress2}</Typography>
        <hr style={{ margin: "16px 0" }} />
        <Typography variant="h6">Total amount in ₹</Typography>
        <Typography variant="h4">{totalAmountInRupees}</Typography>
        <Typography variant="body2">1 ETH =₹{ethValue}</Typography>
        <Typography variant="h6">Total ETH:</Typography>
        <Typography variant="h4">{totalAmountInEth} ETH</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{ marginLeft: 2 }}
          >
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmPaymentPopup;

//https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=inr
