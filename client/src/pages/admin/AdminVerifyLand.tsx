import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Link } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SmartContractContext } from '../../utils/SmartContractContext';



interface LandData {
    id: number;
    area: number;
    landAddress: string;
    landPrice: number;
    allLatitudeLongitude: string;
    propertyPID: number;
    physicalSurveyNumber: string;
    document: string;
    isforSell: boolean;
    ownerAddress: string;
    landVerified: boolean;
}




// function createData(
//     si: number,
//     address: string,
//     area: string,
//     price: number,
//     pid: number,
//     surveyno: number,
//     document: any,
//     verify: any,
// ) {
//     return { si, address, area, price, pid, surveyno, document, verify };
// }

// const rows = [
//     createData(1, "890381283498092832", "Nilambur", 89839, 1345463545, 4512156, <Link href="#">View doc</Link>, "Verifed"),
// ];

export const AdminVerifyLand = () => {

    const { landContract } = useContext(SmartContractContext);

    const [landdetails, setLanddetails] = useState<LandData[]>([])
    const [verify, setVerify] = useState<boolean>()


    useEffect(() => {
        const fetchlanddetails = async () => {
            const res = await axios.get('http://localhost:4000/alllandlist');
            console.log(res.data)
            setLanddetails(res.data)
        }
        fetchlanddetails();

    }, [verify])







    const handleVerify = async (id: any,) => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0];
            console.log(account)
            if (landContract) {
                const test = await landContract.methods.verifyLand(id)
                    .send({ from: account });
                console.log(JSON.stringify(test));
                setVerify(!verify);
            }
            else {
                console.log("contract instance not found")
            }
        } catch (error) {
            console.log(error)
        }
    }




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
                    {landdetails.map((row) => (
                        <TableRow
                            key={row.propertyPID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.landAddress}
                            </TableCell>
                            <TableCell>{row.area}</TableCell>
                            <TableCell>{row.landPrice}</TableCell>
                            <TableCell>{row.propertyPID}</TableCell>
                            <TableCell>{row.physicalSurveyNumber}</TableCell>
                            <TableCell><Link href={row.document}>View doc</Link ></TableCell>
                            <TableCell>{row.landVerified ?
                                <Button disabled>verified</Button> :
                                <Button variant='contained' onClick={() => handleVerify(row.id)}>verify</Button>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}