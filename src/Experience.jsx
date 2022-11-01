import React from "react";

const Experience = () => {
  return (
    <>
      <mesh position-x={-1}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="purple" wireframe />
      </mesh>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
