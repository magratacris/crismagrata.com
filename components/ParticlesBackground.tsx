import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      //   url="http://foo.bar/particles.json"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          color: {
            value: "#FF0000",
            animation: {
              enable: true,
              speed: 10,
            },
          },
          move: {
            attract: {
              enable: false,
              distance: 100,
              rotate: {
                x: 2000,
                y: 2000,
              },
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0,
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: "#000",
        },
        fullScreen: {
          zIndex: -1,
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
    />
  );
};
export default ParticlesBackground;
