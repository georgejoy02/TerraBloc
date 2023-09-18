import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { SmartContractContext } from "../../utils/SmartContractContext";
import { useNavigate } from "react-router-dom";

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

const TransferOwnership = () => {
  const navigate = useNavigate();

  const [landReq, setLandReq] = useState<LandRequest[]>([]);
  const [reload, setReload] = useState(false);

  const { landContract } = useContext(SmartContractContext);

  useEffect(() => {
    const fetchreceivedrequest = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        console.log(account);
        const res = await axios.get("http://localhost:4000/transferlist");
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setLandReq(res.data);
        } else {
          alert("no properties is transfer phase");
        }
      } catch {
        console.log("error occured in trnsfer ownership fetch");
      }
    };
    fetchreceivedrequest();
  }, [reload]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Land ID</TableCell>
            <TableCell>Seller Address</TableCell>
            <TableCell>Buyer Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Transfer Ownership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {landReq.map((row) => (
            <TableRow
              key={row.reqId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.reqId}</TableCell>
              <TableCell>{row.landId}</TableCell>
              <TableCell component="th" scope="row">
                {row.sellerId}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.buyerId}
              </TableCell>
              <TableCell>{rows[parseInt(row.requestStatus)]}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  disabled={["0", "1", "2", "4"].includes(row.requestStatus)}
                  onClick={() =>
                    navigate("transferownership", {
                      state: {
                        sellerId: row.sellerId,
                        buyerId: row.buyerId,
                        landId: row.landId,
                        reqId: row.reqId,
                      },
                    })
                  }
                >
                  Transfer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransferOwnership;
