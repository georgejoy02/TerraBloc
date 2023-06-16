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
    buyerAddress: string,
    status: string,
    paymentDone: string,
    reject: boolean,
    accept: boolean
) {
    return { si, landId, buyerAddress, status, paymentDone, reject, accept };
}

const rows = [
    createData(
        1,
        "8983924938",
        "Prayikkalam",
        "no status",
        "done",
        false, //rejecct
        false), //accept
];

const MyReceivedRequests = () => {
    const handleAccept = (row: any) => {
        // Perform accept action
        console.log("Accept clicked for row:", row);
    };

    const handleReject = (row: any) => {
        // Perform reject action
        console.log("Reject clicked for row:", row);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Land Id</TableCell>
                        <TableCell>Buyer Address</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Payment Done</TableCell>
                        <TableCell>Reject</TableCell>
                        <TableCell>Accept</TableCell>
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
                            <TableCell>{row.buyerAddress}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.paymentDone}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="error"
                                    disabled={row.reject || row.accept}
                                    onClick={() => handleReject(row)}
                                >
                                    Reject
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="success"
                                    disabled={row.reject || row.accept}
                                    onClick={() => handleAccept(row)}
                                >
                                    Accept
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyReceivedRequests;
