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
        {/* <ambientLight intensity={10} color="white" /> */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
        <OrbitControls enableZoom={false} />
        <Universe />
      </Suspense>
    </Canvas>
  );
};

export default CanvasUniverse;
