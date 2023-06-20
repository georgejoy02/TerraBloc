import { Navbar } from "../components/layouts/Navbar";
import { Typography, Box, Grid } from "@mui/material";
import { ParticleJs } from "../components/particles";
import { styled } from "@mui/system";
import Mainlogo from "../images/bcIcon2.svg";
import { Footer } from "./Footer";

export const Home = () => {
  const Blurbox = styled(Box)({
    background: "#transparent",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(100, 100,100, 0.1)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(200, 200, 200, 0.8)",
  });

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Navbar />

      <Box p={10} sx={{ flexGrow: 1 }}>
        {/* <ParticleJs /> */}
        <Grid container spacing={10}>
          <Grid item xs={12} sx={{ margin: "200px" }}>
            <Grid container justifyContent={"center"}>
              <Blurbox sx={{ display: "inline-flex", flexDirection: "column" }}>
                <img src={Mainlogo} alt="MainLogo" />
                <Typography
                  align="center"
                  variant="h4"
                  sx={{ fontWeight: 450, fontSize: 50 }}
                >
                  TerraBloc
                </Typography>
                <Typography noWrap sx={{ fontWeight: 200, fontSize: 20 }}>
                  Revolutionizing property transactions with blockchain
                </Typography>
              </Blurbox>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Blurbox style={{height:"200px"}}>
                  <Typography variant="h4" sx={{ fontWeight: 400, fontSize: 30 }} gutterBottom>
                    What is TerraBloc?
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 370, fontSize: 20 }}
                  >
                    TerraBloc is a secure and decentralized platform for buying
                    and selling land. Powered by blockchain technology, it
                    provides a trusted marketplace for land transactions. With
                    TerraBloc, you can confidently engage in transactions,
                    knowing that your transactions are secure and transparent.{" "}
                  </Typography>
                </Blurbox>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              style={{ marginLeft: "700px", marginTop: "30px" }}
            >
              <Grid item xs={12} md={6}>
                <Blurbox style={{height:"200px"}}>
                  <Typography variant="h4" sx={{ fontWeight: 400, fontSize: 30 }} gutterBottom>
                    Secure and Transparent Transactions
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 370, fontSize: 20 }}
                  >
                    With TerraBloc, every transaction is transparent and
                    tamper-proof. Our platform leverages blockchain technology
                    to eliminate intermediaries and ensure direct peer-to-peer
                    transactions. The blockchain securely stores transaction
                    records, creating an immutable history that guarantees the
                    integrity of your land transactions.{" "}
                  </Typography>
                </Blurbox>
              </Grid>
            </Grid>
            <Grid container spacing={6} style={{ marginTop: "30px" }}>
              <Grid item xs={12} md={6}>
                <Blurbox style={{height:"200px"}}>
                  <Typography variant="h4" sx={{ fontWeight: 400, fontSize: 30 }} gutterBottom>
                    Protecting Property Rights and Preventing Fraud{" "}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 380, fontSize: 20 }}
                  >
                    Registering your land with TerraBloc offers increased
                    protection against fraud and upholds your property rights.
                    Our blockchain-based system provides a reliable record of
                    ownership, preventing unauthorized changes and disputes. By
                    using TerraBloc, you can enjoy a trusted platform that
                    safeguards your property rights and minimizes the risk of
                    fraudulent activities.{" "}
                  </Typography>
                </Blurbox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
