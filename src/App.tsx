import React, {createContext, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stars } from '@react-three/drei'
import { Player } from './components/Player';
import { UserController } from './components/UserController';
import { Physics } from '@react-three/cannon';
import { Plane } from "./components/Plane"

import './App.css';


export const AppContext = createContext({})

const App : React.FC = () => {
  const [state, setState] = useState<{init: boolean, position: undefined | number}>({
    init: true,
    position: undefined
  })

  return (
    <>
      <Canvas shadows gl={{ alpha: false }}  camera={{ fov: 50 }}>
      <AppContext.Provider value={{state, setState}}>
      <Physics 
        tolerance={0}
        iterations={50}
        gravity={[0, -9.86, 0]}>

        <Plane/>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
        <color attach="background" args={['#040811']} />
        <ambientLight intensity={1}/>
        <Player/>
        <group position={[2,-2,0]}>
          <mesh castShadow>
              <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
              <meshLambertMaterial color={"red"} />
          </mesh>
        </group>
        <OrbitControls makeDefault enabled={false} />
        <UserController/>
        </Physics>
      </AppContext.Provider>
      </Canvas>
    </>
  );
}

export default App;
