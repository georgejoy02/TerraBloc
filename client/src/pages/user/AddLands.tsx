import * as React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TerrainIcon from "@mui/icons-material/Terrain";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../../components/Appbar";
import { SmartContractContext } from '../../utils/SmartContractContext';
import axios from "axios";


const FormContainer = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
        margin: theme.spacing(2),
        width: "100%",
        maxWidth: 600,
    },
}));

const AddLands: React.FC = () => {
    const [area, setArea] = useState<number | null>(null);
    const [address, setAddress] = useState<string>("");
    const [landPrice, setLandPrice] = useState<number | null>(null);
    const [allLatLong, setAllLatLong] = useState();
    const [pid, setPid] = useState<number | null>(null);
    const [surveyNo, setSurveyNo] = useState<number | null>(null);
    const [landDoc, setLandDoc] = useState<File | null>(null);
    const [filename, setFilename] = useState("");
    // const [errorMessageDoc, setErrorMessageDoc] = useState<string>("");
    // const [errorMessageAadhar, setErrorMessageAadhar] = useState<string>("");
    // const [errorMessagePan, setErrorMessagePan] = useState<string>("");

    const { landContract } = useContext(SmartContractContext);


    const navigate = useNavigate();

    const handleDrawLandOnMap = () => {
        // Navigate to the map integration page
        navigate("/map");
    };

    const handleUploadDocument = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files) {
            setLandDoc(e.target.files[0]);
            const file = e.target.files[0];
            const { name } = file;
            setFilename(name);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0];

            console.log(account)
            if (landContract) {

                const result = await axios.post("http://localhost:4000/islandreg", { "pid": pid });
                if (result.data == true) {
                    alert("land already registered");
                    return;
                }
                const formData = new FormData();
                formData.append("file", landDoc as File);
                const res = await axios.post("http://localhost:4000/fileupload", formData);
                console.log(res.data);
                const docUrl = res.data;
                if (docUrl) {
                    const test = await landContract.methods.addLand(area, address, landPrice, allLatLong, pid, surveyNo, docUrl)
                        .send({ from: account });
                    console.log(JSON.stringify(test));
                    alert("land successfully added");
                } else {
                    alert("error in fetching document url")
                }
            } else {
                console.log("contract instance not found")
            }
        } catch (error) {
            console.error(error);
        }
    };

    const parseInputValue = (value: string): number | null => {
        const parsedValue = parseInt(value, 10);
        return isNaN(parsedValue) ? null : parsedValue;
    };

    return (
        <div>
            <Appbar title="Add Lands" />
            <Box marginTop={4}>
                <Container maxWidth="md">
                    <FormContainer onSubmit={handleSubmit}>
                        <TextField
                            required
                            label="Area (SqFt)"
                            value={area ?? ""}
                            style={{ marginBottom: "16px" }}
                            onChange={(event) => setArea(parseInputValue(event.target.value))}
                        />
                        <TextField
                            required
                            label="Address"
                            value={address}
                            style={{ marginBottom: "16px" }}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <TextField
                            required
                            label="Land Price"
                            inputProps={{ inputMode: "numeric" }}
                            value={landPrice ?? ""}
                            style={{ marginBottom: "16px" }}
                            onChange={(event) =>
                                setLandPrice(parseInputValue(event.target.value))
                            }
                        />
                        <TextField
                            required
                            label="PID"
                            inputProps={{ inputMode: "numeric" }}
                            value={pid ?? ""}
                            style={{ marginBottom: "16px" }}
                            onChange={(event) => setPid(parseInputValue(event.target.value))}
                        />
                        <TextField
                            required
                            label="Survey No"
                            inputProps={{ inputMode: "numeric" }}
                            value={surveyNo ?? ""}
                            style={{ marginBottom: "16px" }}
                            onChange={(event) =>
                                setSurveyNo(parseInputValue(event.target.value))
                            }
                        />
                        <Box display="flex" flexDirection="column">
                            <Button
                                variant="contained"
                                color="inherit"
                                startIcon={<TerrainIcon />}
                                onClick={handleDrawLandOnMap}
                                style={{ marginBottom: "16px" }}
                            >
                                Draw Land on Map
                            </Button>
                            <Box>
                                <input
                                    accept="application/pdf,image/*"
                                    style={{ display: "none" }}
                                    id="doc-upload"
                                    type="file"
                                    onChange={handleUploadDocument}
                                />
                                <label htmlFor="doc-upload" >
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        component="span"
                                        startIcon={<CloudUploadIcon />}
                                        style={{ marginBottom: "16px" }}
                                    >
                                        Upload Document
                                    </Button>
                                    {filename}
                                </label>
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ width: "30%", margin: "auto", marginTop: "16px" }}
                            sx={{ width: "30%", margin: "auto", marginTop: "16px", fontSize: "1.5rem", padding: "12px" }}
                        >
                            submit
                        </Button>
                    </FormContainer>
                </Container>
            </Box>
        </div>
    );
};

export default AddLands;
