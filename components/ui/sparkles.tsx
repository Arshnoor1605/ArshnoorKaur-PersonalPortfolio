"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  height?: string; // Adding height as a prop
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    height = "100vh", // Default height set to 100vh
  } = props;

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <div className={cn("relative", className)} style={{ height }}>
      {/* Name Section */}
      <h1 className="absolute top-0 left-0 right-0 text-center text-9xl font-extrabold z-20">
        Arshnoor Kaur
      </h1>

      {/* SparklesCore Component */}
      <motion.div animate={controls} className={cn("opacity-0 h-full w-full")}>
        {init && (
          <Particles
            id={id || generatedId}
            className="h-full w-full z-10" // Ensuring particles are behind the text
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: background || "#0d47a1",
                },
              },
              fullScreen: {
                enable: false,
                zIndex: 1, // Ensuring particles stay behind
              },

              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true as any,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                collisions: {
                  absorb: {
                    speed: 2,
                  },
                  bounce: {
                    horizontal: {
                      value: 1,
                    },
                    vertical: {
                      value: 1,
                    },
                  },
                  enable: false,
                  maxSpeed: 50,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: particleColor || "#ffffff",
                },
                move: {
                  enable: true,
                  speed: {
                    min: 0.1,
                    max: 1,
                  },
                },
                number: {
                  density: {
                    enable: true,
                    width: 200,
                    height: 400,
                  },
                  value: particleDensity || 120,
                },
                opacity: {
                  value: {
                    min: 0.1,
                    max: 1,
                  },
                  animation: {
                    enable: false,
                    speed: speed || 1,
                    sync: false,
                  },
                },
                size: {
                  value: {
                    min: minSize || 1,
                    max: maxSize || 3,
                  },
                },
                shape: {
                  type: "circle",
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
