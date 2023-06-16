import * as React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TerrainIcon from "@mui/icons-material/Terrain";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../../components/Appbar";

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
    const [pid, setPid] = useState<number | null>(null);
    const [surveyNo, setSurveyNo] = useState<number | null>(null);

    const navigate = useNavigate();

    const handleDrawLandOnMap = () => {
        // Navigate to the map integration page
        navigate("/map");
    };

    const handleUploadDocument = () => {
        // Handle the upload document functionality
        console.log("Upload document clicked");
    };

    const handleAdd = () => {
        // Handle the add functionality
        console.log("Add clicked");
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
                    <FormContainer>
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
                            <Button
                                variant="contained"
                                color="inherit"
                                startIcon={<CloudUploadIcon />}
                                onClick={handleUploadDocument}
                                style={{ marginBottom: "16px" }}
                            >
                                Upload Document
                            </Button>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAdd}
                            style={{ width: "30%", margin: "auto", marginTop: "16px" }}
                            sx={{ width: "30%", margin: "auto", marginTop: "16px", fontSize: "1.5rem", padding: "12px" }}
                        >
                            Add
                        </Button>
                    </FormContainer>
                </Container>
            </Box>
        </div>
    );
};

export default AddLands;
