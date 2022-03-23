import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import Universe from "./Universe";
import { OrbitControls } from "@react-three/drei";
// import Universe from "./Universe";
const CanvasUniverse = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1} color={`#32C1CC`} />
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
        <OrbitControls autoRotate enableZoom={false} />
        <Universe />
      </Suspense>
    </Canvas>
  );
};

export default CanvasUniverse;
