import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, Grid } from "@mui/material";
// import { initialData } from "../../components/DummyData";
import Lcard from "../../components/Lcard";
import { Appbar } from "../../components/Appbar";
import axios from "axios";


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

const MyLands = () => {
    const [landArr, setLandArr] = useState<LandData[]>([]);
    const [isForSell, setIsForSell] = useState<boolean>(false)

    // useEffect(() => {

    // }, [])

    useEffect(() => {
        const fetchLAndData = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0];
            const res = await axios.post("http://localhost:4000/mylandlist", { "id": account })
            console.log(res.data)
            setLandArr(res.data)
        }
        fetchLAndData();
    }, [isForSell])

    return (
        <>
            <Appbar title="Land Gallery" />
            <div style={{ marginLeft: "270px", marginRight: "10px" }}>
                <Grid container spacing={2}>
                    {landArr.map((i) => (
                        <Grid item xs={3} key={i.id}>
                            <Lcard item={i} setIsForSell={setIsForSell} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default MyLands