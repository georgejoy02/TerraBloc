import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { SmartContractContext } from '../../utils/SmartContractContext';



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

const MySentLandRequests = () => {



    const [landReq, setLandReq] = useState<LandRequest[]>([])
    const [reload, setReload] = useState(false)


    const { landContract } = useContext(SmartContractContext);

    useEffect(() => {
        const fetchreceivedrequest = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0];
            console.log(account)
            const res = await axios.post("http://localhost:4000/sentreqstatus", { "key": account })
            console.log(res.data)
            setLandReq(res.data)
        }
        fetchreceivedrequest();

    }, [reload])

    const handleMakePayment = async (landPrice: string, reqId: number) => {
        const amount = parseInt(landPrice);

        try {
            if (landContract) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                const account = accounts[0];
                const test = await landContract.methods.makePayment(reqId)
                    .send({ from: account, value: amount });
                console.log(JSON.stringify(test));
                setReload(!reload)
            } else {
                console.log("contract instance not found")
            }
        } catch (error) {
            console.log(error)
        }

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
                        {landReq.map((row) => (
                            <TableRow
                                key={row.landId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.reqId}</TableCell>
                                <TableCell>{row.landId}</TableCell>
                                <TableCell>{row.sellerId}</TableCell>
                                <TableCell>{rows[parseInt(row.requestStatus)]}</TableCell>
                                <TableCell>{row.landPrice}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        disabled={["0", "2", "3", "4"].includes(row.requestStatus)}
                                        onClick={() => handleMakePayment(row.landPrice, row.reqId)}
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
