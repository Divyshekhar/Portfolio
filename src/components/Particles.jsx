import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
const ParticlesComponent = ({ darkTheme, setDarkTheme }) => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Define particle options dynamically based on darkTheme
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: darkTheme ? "#000000" : "rgb(186,216,182)", // Background color based on theme
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: darkTheme ? "#61ff05" : "#ffffff", // Particle color based on theme
        },
        links: {
          color: darkTheme ? "#61ff05" : "#ffffff", // Link color based on theme
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [darkTheme] // Recalculate options when darkTheme changes
  );

  return <Particles id="tsparticles" init={particlesLoaded} options={options} />
};

export default ParticlesComponent;
