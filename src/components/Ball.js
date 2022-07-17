import { useContext, useEffect } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame } from '@react-three/fiber'
import {AppContext} from "../App";

export const Ball = (props) => {
  const {setState} = useContext(AppContext)
  const [sphereRef] = useSphere(() => ({
    mass: 250,
    args: [0.3, 0.3, 0.3],
    type: "Dynamic",
    onCollide: (e) => collide(e),
    material: {
      friction: 40,
    },
    ...props
  }))


  const collides = []
  const collide = (e) => {
    const isTheSame = collides.some(el => el[1] === e.target.id)
    if (isTheSame && e.body.receiveShadow) return
    collides.push([!e.body.receiveShadow, e.target.id])
    if (!isTheSame) {
      const id = setTimeout(() => {
        const isMissed = collides.every(el => el[0] === false)
        if (isMissed) setState(prev => ({...prev, missed: prev.missed + 1}))
      }, 3000)
      return () => clearTimeout(id)
    }
    
  }

  useFrame(() => {
    if (sphereRef?.current) {
      if (sphereRef.current.matrix.elements[13].toFixed(1) <= -1.2) sphereRef.current.material.color.setHex(0x0000FF)
      if (sphereRef.current.matrix.elements[13].toFixed(1) > -1.2) sphereRef.current.material.color.setHex(0xf70202)

      if (sphereRef.current.matrix.elements[12].toFixed(1) < -140 || sphereRef.current.matrix.elements[14].toFixed(1) < -140) {
        sphereRef.current.material.color.setHex(0x070807)
      }
    }
  })


  return (
    <mesh ref={sphereRef} castShadow>
      <sphereBufferGeometry args={[0.3, 32, 32]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  )
}
