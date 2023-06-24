import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(
    si: number,
    landId: string,
    ownerAddress: string,
    status: string,
    price: string
) {
    return { si, landId, ownerAddress, status, price };
}

const rows = [
    createData(1, "890381283498092832", "Owner's Address 1", "Pending", "₹50000"),
    createData(2, "783920183409283047", "Owner's Address 2", "Completed", "₹75000"),
];

const MySentLandRequests = () => {
    const handleMakePayment = (row: any) => {
        // Perform make payment action
        console.log("Make Payment clicked for row:", row);
    };

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
                        {rows.map((row) => (
                            <TableRow
                                key={row.landId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.si}</TableCell>
                                <TableCell>{row.landId}</TableCell>
                                <TableCell>{row.ownerAddress}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        disabled={row.status === "Completed"}
                                        onClick={() => handleMakePayment(row)}
                                    >
                                        Make Payment
                                    </Button>
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
