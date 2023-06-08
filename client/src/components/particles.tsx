import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleJs = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => { await console.log(container); }, []);

    return (<div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                fpsLimit: 60,
                "particles": {
                    "number": {
                        "value": 12,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#000"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 5,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 1,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": true
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 400,
                        "color": "#000",
                        "opacity": 1,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    detectsOn: "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": ["grab", "bubble"]
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 200,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 200,
                            "size": 20,
                            "duration": 2,
                            "opacity": 0.5,
                            "speed": 3,
                            "color": {
                                "value": "#ff0000"
                            }
                        },
                        "repulse": {
                            "distance": 300
                        },
                        "push": {
                            "particles_nb": 1
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
                    // "position": "50% 50%",
                    "position": "absolute",
                    "repeat": "no-repeat",
                    "size": "cover",
                    // "size": "contain"
                }
            }}
        />
        </div>
    )
}

