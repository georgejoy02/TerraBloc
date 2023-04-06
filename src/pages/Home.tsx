
import { Navbar } from "../components/layouts/Navbar"
import { Typography, Box, Grid } from "@mui/material"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Home = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => { await console.log(container); }, []);

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <Navbar />
                    <Box p={10}>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            "fullScreen": {
                                "enable": false,
                                "zIndex": -1
                            },
                            "particles": {
                                "number": {
                                    "value": 10,
                                    "density": {
                                        "enable": false,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#fff"
                                },
                                "shape": {
                                    "type": "point"
                                },
                                "opacity": {
                                    "value": 0.8,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 4,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "rotate": {
                                    "value": 0,
                                    "random": true,
                                    "direction": "clockwise",
                                    "animation": {
                                        "enable": true,
                                        "speed": 5,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 600,
                                    "color": "#000",
                                    "opacity": 0.4,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 2,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": ["grab"]
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true,
                            "background": {
                                "color": "#fff",
                                "image": "",
                                "position": "50% 50%",
                                "repeat": "no-repeat",
                                "size": "cover"
                            }
                        }}
                   />
                        <Typography variant="h2" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="h5">
                            TerraWallet is a blockchain based platform that provides a secure and decentralized marketplace for buying and selling land. Our platform ensures that all transactions are transparent and tamper-proof, stored securely on a trusted blockchain network. By registering their land with the government through TerraWallet, users can enjoy increased protection against fraud and ensure their property rights are upheld. With TerraWallet, users can easily and confidently engage in land transactions, knowing that they are backed by a trusted and secure platform.
                        </Typography>
                    </Box>
                    
        </div>
    )
}
