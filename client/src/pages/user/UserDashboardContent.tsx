import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const UserDashboardContent = () => {
    const formData = {
        walletAddress: "0x1234567890",
        name: "John Doe",
        age: "30",
        city: "City",
        aadharNumber: "1234 5678 9012",
        pan: "ABCDE1234F",
        email: "johndoe@example.com",
    };

    const openDocument = () => {
        // Logic to open the PDF document
        // Replace the placeholder URL with the actual URL of the PDF document
        window.open("https://example.com/document.pdf", "_blank");
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
