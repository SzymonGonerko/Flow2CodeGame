import * as THREE from "three"
import { useRef, useContext } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import {AppContext} from "../App";
import Cannon from "../gltfjsx/Cannon"

const rotation = new THREE.Vector3()

export const Player = () => {
    const {state, setState} = useContext(AppContext)
    const { camera } = useThree()
    const refWeapon = useRef()

    useFrame(() => {
    refWeapon.current.rotation.copy(camera.rotation)
    refWeapon.current.position.copy(camera.position).add(camera.getWorldDirection(rotation).multiplyScalar(1))
    })

    return (
        <>
          <group ref={refWeapon}>
                <Cannon position={[0, -0.5, 0]} rotation={[Math.PI, -Math.PI/2, Math.PI ]}/>
          </group>
        </>
      )
}