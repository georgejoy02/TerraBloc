import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { SmartContractContext } from '../../utils/SmartContractContext';



const rows = ["requested", "accepted", "rejected", "payment done", "completed"];





interface LandRequest {
    reqId: number;
    sellerId: string;
    buyerId: string;
    landId: number;
    requestStatus: string;
    isPaymentDone: boolean;
}

const MyReceivedRequests = () => {

    const [landReq, setLandReq] = useState<LandRequest[]>([])
    const [reload, setReload] = useState(false)


    const { landContract } = useContext(SmartContractContext);

    useEffect(() => {
        const fetchreceivedrequest = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0];
            console.log(account)
            const res = await axios.post("http://localhost:4000/myreceivedrequest", { "key": account })
            if(Array.isArray(res.data)){
            setLandReq(res.data)
            }
        }
        fetchreceivedrequest();

    }, [reload])


    const handleAccept = async (reqId: number) => {
        try {
            if (landContract) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                const account = accounts[0];
                const test = await landContract.methods.acceptRequest(reqId)
                    .send({ from: account });
                console.log(JSON.stringify(test));
                setReload(!reload)
            } else {
                console.log("contract instance not found")
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleReject = async (reqId: number) => {
        try {
            if (landContract) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                const account = accounts[0];
                const test = await landContract.methods.rejectRequest(reqId)
                    .send({ from: account });
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
                            <TableCell>Req Id</TableCell>
                            <TableCell>Land Id</TableCell>
                            <TableCell>Buyer Address</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Payment Done</TableCell>
                            <TableCell>Reject</TableCell>
                            <TableCell>Accept</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {landReq.map((row) => (
                            <TableRow
                                key={row.reqId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.reqId}</TableCell>
                                <TableCell>{row.landId}</TableCell>
                                <TableCell>{row.buyerId}</TableCell>
                                <TableCell>{rows[parseInt(row.requestStatus)]}</TableCell>
                                <TableCell>{row.isPaymentDone ?
                                    <Typography>yes</Typography> : <Typography>no</Typography>}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        disabled={["1", "2", "3", "4"].includes(row.requestStatus)}
                                        onClick={() => handleReject(row.reqId)}
                                    >
                                        Reject
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        disabled={["1", "2", "3", "4"].includes(row.requestStatus)}
                                        onClick={() => handleAccept(row.reqId)}
                                    >
                                        Accept
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

export default MyReceivedRequests;
