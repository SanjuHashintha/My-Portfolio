// src/components/SpaceBackground.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100vw", height: "100vh" }}
        dpr={[1, 2]}
        // ✅ Enable transparency
        gl={{ alpha: true, antialias: true }}
      >
        {/* 🚫 Remove: <color attach="background" ... /> */}

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Lights for star glow (no background color) */}
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#F715AB" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.2}
          color="#9201CB"
        />
      </Canvas>
    </div>
  );
}
