import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button, Box } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

type ConfirmPaymentPopupProps = {
  open: boolean;
  onClose: () => void;
  userAddress1: string;
  userAddress2: string;
  totalAmountInRupees: string;
  ethValue: string;
  totalAmountInEth: string;
};

const ConfirmPaymentPopup: React.FC<ConfirmPaymentPopupProps> = ({
  open,
  onClose,
  userAddress1,
  userAddress2,
  totalAmountInRupees,
  ethValue,
  totalAmountInEth,
}) => {
  const handleConfirm = () => {
    // Handle confirm logic here
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <DialogTitle align="center">Confirm Payment</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography align="center">{userAddress1}</Typography>
        <ArrowCircleDownIcon sx={{ fontSize: 40, alignSelf: "center", mt: 2 }} />
        <Typography align="center">{userAddress2}</Typography>
        <hr style={{ margin: "16px 0" }} />
        <Typography variant="h6">Total amount in ₹</Typography>
        <Typography variant="h4">{totalAmountInRupees}</Typography>
        <Typography variant="body2">1 ETH = {ethValue} ₹</Typography>
        <Typography variant="h6">Total ETH:</Typography>
        <Typography variant="h4">{totalAmountInEth} ETH</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirm} sx={{ marginLeft: 2 }}>Confirm</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmPaymentPopup;
