import React, {createContext, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stars } from '@react-three/drei'
import { Player } from './components/Player';
import { UserController } from './components/UserController';
import { Physics } from '@react-three/cannon';
import { Plane } from "./components/Plane"
import { Box } from "./components/Box"
import { GroupBox } from './components/GroupBox';
import { Score } from './components/Score';
import { Logo } from "./components/Logo/Logo"

import './App.css';


export const AppContext = createContext({})

const App : React.FC = () => {
  const [state, setState] = useState<{init: boolean, position: undefined | number, shot: boolean, Power: number, destroyed: number, start: boolean, missed: number}>({
    init: true,
    position: undefined,
    Power: 1,
    shot: false,
    destroyed: 0,
    start: false,
    missed: 0,
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
        <ambientLight intensity={0.9}/>
        <Logo/>
        <Player/>

        <GroupBox/>

        <Score/>

        <OrbitControls makeDefault enabled={false} />
        <UserController/>
        </Physics>
      </AppContext.Provider>
      </Canvas>
    </>
  );
}

export default App;
