import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

interface Address {
  address: any;
}

interface AddressDetails {
  si: any;
  address: any;
  name: any;
  age: any;
  designation: any;
  city: any;
}

const ListAdmin:React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [rows, setRows] = useState<AddressDetails[]>([]);

  const createData = (
    si: number,
    address: string,
    name: any,
    age: any,
    designation: any,
    city: any
  ) => {
    return { si, address, name, age, designation, city };
  };

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get<Address[]>(
          "http://localhost:4000/alluserlist"
        );
        if (Array.isArray(response.data)) {
          setAddresses(response.data);
        } else {
          console.log("No users found");
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
              res.data.age,
              res.data.designation,
              res.data.city
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
  }, [addresses]);

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
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListAdmin;
