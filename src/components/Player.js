import * as THREE from "three"
import { useRef, useContext, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import {AppContext} from "../App";
import Cannon from "../gltfjsx/Cannon"
import {Ball} from "../components/Ball"

const rotation = new THREE.Vector3()

export const Player = () => {
    const {state, setState} = useContext(AppContext)
    const [balls, setBalls] = useState([]);
    const {camera} = useThree()
    const refWeapon = useRef()

    useFrame(() => {
    refWeapon.current.rotation.copy(camera.rotation)
    refWeapon.current.position.copy(camera.position).add(camera.getWorldDirection(rotation))
    camera.zoom = state.zoom
    
    if (state.shot) {
      const now = Date.now();
        setBalls((balls) => [
          ...balls,
          {
            id: now,
            position: [refWeapon.current.position.x * 0.2, (refWeapon.current.position.y  * 0.01) -1, refWeapon.current.position.z * 0.2],
            forward: [camera.getWorldDirection(rotation).multiplyScalar(state.power).x, camera.getWorldDirection(rotation).multiplyScalar(state.power).y, camera.getWorldDirection(rotation).multiplyScalar(state.power).z]
          }
        ]);
        setState(prev => ({...prev, shot: false, start: true}))
    }


    })

    return <>
          <group ref={refWeapon}>
                <Cannon position={[0, -0.5, 0]} rotation={[Math.PI, -Math.PI/2, Math.PI ]}/>
          </group>

          <group>
              {balls.map((ball) => 
              <Ball
                key={ball.id}
                velocity={ball.forward}
                position={ball.position}
              />
              )}
          </group>
        </>
}