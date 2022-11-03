import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.x += delta;
  });

  return (
    <>
      <mesh ref={cubeRef} position-x={-1} scale={1.4}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="purple" wireframe />
      </mesh>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={15}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
