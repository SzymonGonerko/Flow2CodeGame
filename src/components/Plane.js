
import { usePlane } from "@react-three/cannon"
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texPlane from "../texture/texturePlane.jpg"


export const Plane = (props) => {
    const texture = useTexture(texPlane)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  const [ref] = usePlane(() => ({
    type: "Static",
    position: [0, -2, 0],
    rotation: [-Math.PI / 2, 0, 0], 
    ...props
 }))


  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial map={texture} roughness={0.5} map-repeat={[50, 50]}  />
    </mesh>
  )
}
