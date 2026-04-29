// each petal is animated individually
import React, { useState, useEffect } from "react";

function SakuraPetals({ src, width = 30, height = 30 }) {
  const [style, setStyle] = useState({
    top: -50, // start slightly above the viewport
    left: Math.random() * window.innerWidth,
    rotation: Math.random() * 360,
    swayOffset: Math.random() * 100, // unique for each petal
    speed: Math.random() * 2 + 1, // fall speed

    size: Math.random() * 20 + 30, // 20–50px
    opacity: Math.random() * 0.5 + 0.5 // 0.5–1
  });

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setStyle((prev) => {
        const newTop = prev.top + prev.speed;
        const sway = Math.sin((newTop + prev.swayOffset) * 0.01) * 50; // sway amplitude
        const rotation = prev.rotation + 2; // spin petal

        // Reset if it reaches the bottom
        if (newTop > window.innerHeight + 50) {
          return {
            ...prev,
            top: -50,
            left: Math.random() * window.innerWidth,
            rotation: Math.random() * 360,
            swayOffset: Math.random() * 100,
            speed: Math.random() * 2 + 1,
          };
        }

        return {
          ...prev,
          top: newTop,
          left: (prev.left + sway * 0.01) % window.innerWidth,
          rotation,
        };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <img
      src={src}
      alt="sakura petal"
      className="sakuraPetal"
      style={{
        position: "absolute",
        width: style.size,
        height: style.size,
        opacity: style.opacity,
        top: style.top,
        left: style.left,
        transform: `rotate(${style.rotation}deg)`,
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
  );
}

export default SakuraPetals;