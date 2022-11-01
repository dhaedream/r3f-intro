import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const cubeRef = useRef();
  useFrame(() => {
    cubeRef.current.rotation.y += 0.003;
  });

  return (
    <>
      <mesh position-x={-1}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh ref={cubeRef} position={[1, 0, 0]}>
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
