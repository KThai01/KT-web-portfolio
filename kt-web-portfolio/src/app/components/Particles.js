import Particles from 'react-tsparticles';

export default function ParticleBG() {
    return (
        <Particles
              options={{
                fullScreen: {
                  enable: false,
                  zIndex: -1,
                },
                style: {
                    position: "absolute",
                    height: "100%",
                    zIndex: -1,
                },
                particles: {
                  number: {
                    value: 100,
                    limit: 100,
                    density: {
                      enable: true,
                      value_area: 500
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "edge",
                    stroke: {
                      width: 0,
                      color: "#059669"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "images/github.svg",
                      width: 5,
                      height: 5
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.5,
                      sync: false
                    }
                  },
                  size: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 5,
                      size_min: 7,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 170,
                    color: "#059669",
                    opacity: 1,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
              }}
            />
    );
}