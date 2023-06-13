import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(
    si: number,
    landId: number,
    buyerAddress: string,
    sellerAddress: string,
    status: string,
    transferOwnership: any,
) {
    return { si, landId, sellerAddress, buyerAddress, status, transferOwnership };
}

const rows = [
    createData(1, 123456, "890381283498092832", "890381283498092832", "Payment done", <Button variant="contained">Transfer</Button>),
];

const TransferOwnership = () => {
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.landId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.si}</TableCell>
                            <TableCell>{row.landId}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.sellerAddress}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.buyerAddress}
                            </TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.transferOwnership}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default TransferOwnership

