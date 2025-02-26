"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ConstellationBackground = ({ children }: { children: React.ReactNode }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles container loaded:", container);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate the difference between the mouse and the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const diffX = e.clientX - centerX;
      const diffY = e.clientY - centerY;
      const factor = 0.1; // Adjust factor to control the shifting effect
      setOffset({ x: diffX * factor, y: diffY * factor });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Particle Canvas Container */}
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: { value: 85, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: 0.9,
                random: { enable: true, minimumValue: 0.3 },
              },
              size: {
                value: { min: 0.5, max: 1.7 },
                random: true,
              },
              links: {
                enable: true,
                distance: 120,
                color: "#ffffff",
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.45,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              // Disable built-in hover effects to avoid local deformations.
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
                resize: false,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      {/* Page Content */}
      {children}
    </>
  );
};

export default ConstellationBackground;
