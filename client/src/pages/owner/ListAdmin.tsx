import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { SmartContractContext } from "../../utils/SmartContractContext";

interface AddressDetails {
  id: number;
  _addr: string;
  name: string;
  age: number;
  designation: string;
  city: string;
}

const ListAdmin: React.FC = () => {
  const [rows, setRows] = useState<AddressDetails[]>([]);
  const [verify, setVerify] = useState<boolean>(false);
  const { landContract } = useContext(SmartContractContext);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setRows([]);
        const response = await axios.get("http://localhost:4000/alllilist");
        if (Array.isArray(response.data)) {
          console.log(response.data);
          setRows(response.data);
        } else {
          console.log("No users found");
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    fetchAddresses();
  }, [verify]);

  const handleRemove = async (address: string) => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      if (landContract) {
        const test = await landContract.methods
          .removeLandInspector(address)
          .send({ from: account });
        console.log(JSON.stringify(test));
        setVerify(!verify);
      } else {
        console.log("contract instance not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>City</TableCell>
            <TableCell>remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row._addr}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemove(row._addr)}
                >
                  remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListAdmin;
