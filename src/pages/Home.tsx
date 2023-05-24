import { Navbar } from "../components/layouts/Navbar"
import { Typography, Box, Grid } from "@mui/material"
import { ParticleJs } from "../components/particles";
import { styled } from '@mui/system';
import Mainlogo from "../images/bcIcon2.svg"

export const Home = () => {

    const Blurbox = styled(Box)({
        background: '#transparent',
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(100, 100,100, 0.1)',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(200, 200, 200, 0.8)',
    });

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <Navbar />
            <Box p={10} sx={{ flexGrow: 1 }}>
                <ParticleJs />
                <Grid container spacing={10} >
                    <Grid item xs={12} sx={{ margin: "200px" }}>
                        <Grid container justifyContent={"center"}>
                            <Blurbox sx={{ display: 'inline-flex', flexDirection: 'column', }}>
                                <img src={Mainlogo} alt="MainLogo" />
                                <Typography align="center" variant="h4" sx={{ fontWeight: 450, fontSize: 50, }}  >
                                    TerraBloc
                                </Typography>
                                <Typography noWrap sx={{ fontWeight: 200, fontSize: 20, }} >
                                    Revolutionizing property transactions with blockchain
                                </Typography>
                            </Blurbox>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Blurbox>
                            <Typography variant="h2" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 350, fontSize: 25 }}>
                                &nbsp;TerraWallet is a blockchain based platform that provides a secure and decentralized marketplace for buying and selling land. Our platform ensures that all transactions are transparent and tamper-proof, stored securely on a trusted blockchain network. By registering their land with the government through TerraWallet, users can enjoy increased protection against fraud and ensure their property rights are upheld. With TerraWallet, users can easily and confidently engage in land transactions, knowing that they are backed by a trusted and secure platform.
                            </Typography>
                        </Blurbox>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}