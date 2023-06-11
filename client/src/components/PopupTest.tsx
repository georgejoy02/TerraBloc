// Parent Component

import { useState } from "react";
import ConfirmPaymentPopup from "./ConfirmPayementPopup";
import { Button } from "@mui/material";

const PopupTest = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Open Popup</Button>
      <ConfirmPaymentPopup
        open={open}
        onClose={handleClose}
        userAddress1={"5y8d75yd8437mxtm3387436473453c4t3847ty8374tc34t7"}
        userAddress2={"wciurown3i4u837ywehf27487382725728782kfjnkw4d5"}
        totalAmountInRupees={"50000"}
        ethValue={"329172.34"}
        totalAmountInEth={"1.52342456"}
      />
    </div>
  );
};

export default PopupTest;
