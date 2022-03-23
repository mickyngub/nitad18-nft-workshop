import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Stellar from "./Stellar";
import { useRef } from "react";

const CanvasStellar = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stellar />
        <Stars radius={60} count={4000} fade />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.25}
          rotateSpeed={0.25}
          minDistance={2}
          maxDistance={6}
        />
      </Suspense>
    </Canvas>
  );
};

export default CanvasStellar;
