

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
    name: string,
    aadhaar: number,
    pan: string,
    document: any,
    verify: any,
) {
    return { si, address, name, aadhaar, pan, document, verify };
}

const rows = [
    createData(1,"890381283498092832","Ashfin",8983924938,"EFRSNSNDK",<Link href="#">View doc</Link>,"Verifed"),
];

const VerifyUser = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell >Address</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Aadhaar</TableCell>
                        <TableCell>PAN</TableCell>
                        <TableCell>Document</TableCell>
                        <TableCell>Verify</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.aadhaar}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.si}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.address}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.aadhaar}</TableCell>
                            <TableCell>{row.pan}</TableCell>
                            <TableCell>{row.document}</TableCell>
                            <TableCell>{row.verify}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default VerifyUser

