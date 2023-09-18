import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import ConfirmPaymentPopup from "../../components/ConfirmPayementPopup";

const rows = ["requested", "accepted", "rejected", "payment done", "completed"];

interface LandRequest {
  reqId: number;
  sellerId: string;
  buyerId: string;
  landId: number;
  requestStatus: string;
  isPaymentDone: boolean;
  landPrice: string;
}

const MySentLandRequests = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [landReq, setLandReq] = useState<LandRequest[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchreceivedrequest = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      const res = await axios.post("http://localhost:4000/sentreqstatus", {
        key: account,
      });
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setLandReq(res.data);
      }
    };
    fetchreceivedrequest();
  }, [reload]);

  return (
    <div style={{ marginLeft: "270px", marginRight: "10px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Land Id</TableCell>
              <TableCell>Owner Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Price (in ₹)</TableCell>
              <TableCell>Make Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {landReq.map((row) => (
              <TableRow
                key={row.landId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.reqId}</TableCell>
                <TableCell>{row.landId}</TableCell>
                <TableCell>{row.sellerId}</TableCell>
                <TableCell>{rows[parseInt(row.requestStatus)]}</TableCell>
                <TableCell>{row.landPrice}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    disabled={["0", "2", "3", "4"].includes(row.requestStatus)}
                    onClick={handleOpen}
                    // handleMakePayment(row.landPrice, row.reqId)}
                  >
                    Make Payment
                  </Button>
                  <ConfirmPaymentPopup
                    open={open}
                    onClose={handleClose}
                    userAddress1={row.sellerId}
                    userAddress2={row.buyerId}
                    totalAmountInRupees={row.landPrice}
                    ethValue={row.landPrice}
                    totalAmountInEth={row.landPrice}
                    setReload={setReload}
                    reload={reload}
                    reqId={row.reqId}
                    landPrice={row.landPrice}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MySentLandRequests;
