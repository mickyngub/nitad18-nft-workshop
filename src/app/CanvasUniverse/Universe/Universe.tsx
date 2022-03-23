// @ts-nocheck

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Universe = () => {
  const { animations, scene } = useGLTF("/universe.gltf");

  let mixer: any;
  if (animations.length) {
    mixer = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  scene.traverse((node) => {
    //ts-ignore
    if (!node.isMesh) return;
    node.material.wireframe = true;
  });

  return <primitive object={scene} scale={0.025}></primitive>;
};

useGLTF.preload("/universe.gltf");

export default Universe;
