import React, {createContext, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stars } from '@react-three/drei'
import { Player } from './components/Player';
import { UserController } from './components/UserController';
import { Physics } from '@react-three/cannon';
import { Plane } from "./components/Plane"
import { Box } from "./components/Box"

import './App.css';


export const AppContext = createContext({})

const App : React.FC = () => {
  const [state, setState] = useState<{init: boolean, position: undefined | number, shot: boolean, Power: number}>({
    init: true,
    position: undefined,
    Power: 1,
    shot: false
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

        <Box position={[-20, 0, -20]}/>
        <Box position={[-20, 1, -20]}/>
        <Box position={[-20, 0, -21]}/>
        <Box position={[-20, 1, -21]}/>
        <Box position={[-20, 0, -22]}/>
        <Box position={[-20, 1, -22]}/>
        <Box position={[-20, 3, -20]}/>
        <Box position={[-20, 3, -21]}/>
        <Box position={[-20, 3, -22]}/>

        <Box position={[0, 0, -30]}/>
        <Box position={[-1, 0, -30]}/>
        <Box position={[-2, 0, -30]}/>
        <Box position={[0, 1, -30]}/>
        <Box position={[-1, 1, -30]}/>
        <Box position={[-2, 1, -30]}/>
        <Box position={[0, 3, -30]}/>
        <Box position={[-1, 3, -30]}/>
        <Box position={[-2, 3, -30]}/>
        <Box position={[-1.5, 5, -30]}/>
        <Box position={[-0.5, 5, -30]}/>
        <Box position={[-1, 7, -30]}/>




        <OrbitControls makeDefault enabled={false} />
        <UserController/>
        </Physics>
      </AppContext.Provider>
      </Canvas>
    </>
  );
}

export default App;
