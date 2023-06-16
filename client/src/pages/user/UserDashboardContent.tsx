import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDashboardContent: React.FC = () => {

    const [acnt, setAcnt] = useState<string>();
    const [name, setName] = useState()
    const [age, setage] = useState()
    const [city, setCity] = useState()
    const [aadhar, setAadhar] = useState()
    const [pan, setPan] = useState()
    const [docurl, setDocurl] = useState()
    const [mail, setMail] = useState()
    const [userVerified, setUserVerified] = useState()



    useEffect(() => {
        const test = async () => {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(async (accounts: any) => {
                        // console.log(accounts)
                        const key = accounts[0];
                        const res = await axios.post("http://localhost:4000/getuserdata", { "key": key });
                        console.log("id: ", res.data);
                        setAcnt(res.data.id)
                        setName(res.data.name)
                        setage(res.data.age)
                        setCity(res.data.city)
                        setAadhar(res.data.aadharNumber)
                        setPan(res.data.panNumber)
                        setDocurl(res.data.document)
                        setMail(res.data.email)
                        setUserVerified(res.data.userVerified)
                    },
                        (err: any) => {
                            console.log(err.message)
                        }
                    );

            } catch (error) {
                console.log(error)
            }
        }
        test();
    }, [])


    const formData = {
        walletAddress: `${acnt}`,
        name: `${name}`,
        age: `${age}`,
        city: `${city}`,
        aadharNumber: `${aadhar}`,
        pan: `${pan}`,
        email: `${mail}`,
    };

    const openDocument = () => {
        // Logic to open the PDF document
        // Replace the placeholder URL with the actual URL of the PDF document
        window.open(docurl, "_blank");
    };

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2}>
                Your Profile
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                <CheckCircle sx={{ color: "green", mr: 1 }} />
                <Typography variant="subtitle1" sx={{ color: "green" }}>
                    Verified
                </Typography>
            </Box>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Wallet Address"
                        value={formData.walletAddress}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Name" value={formData.name} disabled fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Age" value={formData.age} disabled fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="City" value={formData.city} disabled fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Aadhar Number"
                        value={formData.aadharNumber}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="PAN" value={formData.pan} disabled fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" value={formData.email} disabled fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Link component="button" variant="body2" onClick={openDocument}>
                        View Document
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserDashboardContent;
