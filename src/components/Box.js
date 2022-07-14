import React, { useMemo, useContext, useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame } from '@react-three/fiber'
import {AppContext} from "../App";

export const Box = (props) => {
  const {state, setState} = useContext(AppContext)
  const [initParams, setInitParams] = useState({x: 0, y: 0, z: 0, thisOne: true})

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


    useEffect(() => {
      setTimeout(() => {
        const initX = cubeRef?.current?.matrix.elements[12].toFixed(1)
        const initY = cubeRef?.current?.matrix.elements[13].toFixed(1)
        const initZ = cubeRef?.current?.matrix.elements[14].toFixed(1)
        setInitParams({x: initX, y: initY, z: initZ, thisOne: true})
      }, 1500)
    }, [])
    
        useFrame(() => {
          if (!state.start) return
    
          const currX = cubeRef.current.matrix.elements[12].toFixed(1)
          const currY = cubeRef.current.matrix.elements[13].toFixed(1)
          const currZ = cubeRef.current.matrix.elements[14].toFixed(1)
    
          if (currX !== initParams.x && currY !== initParams.y && currZ !== initParams.z && initParams.thisOne) {
            setState(prev => ({...prev, destroyed: prev.destroyed + 1}))
            setInitParams(prev => ({...prev, thisOne: false}))
          }
          
        })


  return (

    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
