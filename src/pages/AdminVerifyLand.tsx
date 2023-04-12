import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

function createData(
    si: number,
    address: string,
    area: string,
    price: number,
    pid: number,
    surveyno: number,
    document: any,
    verify: any,
) {
    return { si, address, area, price, pid, surveyno, document, verify };
}

const rows = [
    createData(1, "890381283498092832", "Nilambur", 89839, 1345463545, 4512156, <Link href="#">View doc</Link>, "Verifed"),
];

export const AdminVerifyLand = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Owner Address</TableCell>
                        <TableCell>Area</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>PID</TableCell>
                        <TableCell>Survey No</TableCell>
                        <TableCell>Document</TableCell>
                        <TableCell>Verify</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.pid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.si}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.address}
                            </TableCell>
                            <TableCell>{row.area}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.pid}</TableCell>
                            <TableCell>{row.surveyno}</TableCell>
                            <TableCell>{row.document}</TableCell>
                            <TableCell>{row.verify}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}