import React, { useMemo } from "react";
import { useBox } from "@react-three/cannon";


export const Box = (props) => {

  const [cubeRef] = useBox(() => ({
    type: "Dynamic",
    mass: 100,
    args: [1, 1, 1],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  const color = useMemo(() => (
    '#' + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0'))
    ,[]);


  return (

    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
