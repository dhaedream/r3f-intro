import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const groupRef = useRef();
  const cubeRef = useRef();
  const sphRef = useRef();
  useFrame((state, delta) => {
    // console.log(state);
    // console.log(delta);
    groupRef.current.rotation.z -= delta;
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.x += delta;

    sphRef.current.rotation.y -= delta;
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh ref={cubeRef} position-x={-1} scale={1.4}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>

        <mesh ref={sphRef} position={[1, 0, 0]}>
          <sphereGeometry />
          <meshBasicMaterial color="purple" wireframe />
        </mesh>
      </group>

      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={15}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
