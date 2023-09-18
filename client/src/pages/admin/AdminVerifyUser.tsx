import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Link } from "@mui/material";
import { useEffect, useContext, useState } from "react";
import { SmartContractContext } from "../../utils/SmartContractContext";
import axios from "axios";

interface Address {
  address: any;
}
interface AddressDetails {
  si: any;
  address: any;
  name: any;
  aadhaar: any;
  pan: any;
  document: any;
  verify: any;
}

const VerifyUser = () => {
  const { landContract } = useContext(SmartContractContext);

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [rows, setRows] = useState<AddressDetails[]>([]);
  const [verify, setVerify] = useState<boolean>();

  const createData = (
    si: number,
    address: string,
    name: any,
    aadhaar: any,
    pan: any,
    document: any,
    verify: any
  ) => {
    return { si, address, name, aadhaar, pan, document, verify };
  };

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:4000/alluserlist");
        if (Array.isArray(response.data)) {
          setAddresses(response.data);
        } else {
          console.log("no users found");
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    const fetchAddressDetails = async () => {
      const detailsArray: AddressDetails[] = [];
      let i = 1;
      for (const address of addresses) {
        try {
          const res = await axios.post("http://localhost:4000/getuserdata", {
            key: address,
          });
          console.log(res.data);
          detailsArray.push(
            createData(
              i,
              res.data.id,
              res.data.name,
              res.data.aadharNumber,
              res.data.panNumber,
              res.data.document,
              res.data.userVerified
            )
          );
          i++;
        } catch (error) {
          console.error(
            `Error fetching details for address ${address}:`,
            error
          );
        }
      }
      setRows(detailsArray);
    };

    if (addresses.length > 0) {
      fetchAddressDetails();
    }
  }, [addresses, verify]);

  const handleVerify = async (address: any) => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      if (landContract) {
        const test = await landContract.methods
          .verifyUser(address)
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
            <TableCell>Aadhaar</TableCell>
            <TableCell>PAN</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Verify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.si}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.si}</TableCell>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.aadhaar}</TableCell>
              <TableCell>{row.pan}</TableCell>
              <TableCell>
                <Link href={row.document}>View doc</Link>
              </TableCell>
              <TableCell>
                {row.verify ? (
                  <Button disabled>verified</Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => handleVerify(row.address)}
                  >
                    verify
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VerifyUser;
