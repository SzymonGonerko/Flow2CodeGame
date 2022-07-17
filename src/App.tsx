import React, {createContext, useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Player } from './components/Player';
import { UserController } from './components/UserController';
import { Physics } from '@react-three/cannon';
import { Plane } from "./components/Plane"
import { GroupBox } from './components/GroupBox';
import { Score } from './components/Score';
import { Logo } from "./components/Logo/Logo"
import { MagicBox } from './components/MagicBox';
import {Loader} from "./Loader"

import './App.css';



export const AppContext = createContext({})

type propsState = {
  player: string
  shot: boolean, 
  power: number, 
  destroyed: number, 
  start: boolean, 
  missed: number, 
  reset: boolean, 
  zoom: number, 
  divisions: {}, 
}

const App : React.FC = () => {
  const [state, setState] = useState<propsState>({
    player: "Player 1",
    power: 1,
    shot: false,
    destroyed: 0,
    start: false,
    missed: 0,
    reset: false,
    zoom: 1,
    divisions: {first: [], second: []}
  })

  return <>
    <Loader/>
    <Canvas shadows gl={{ alpha: false }}  camera={{ fov: 50 }}>
        
      <AppContext.Provider value={{state, setState}}>
        <Physics 
          tolerance={0}
          iterations={50}
          gravity={[0, -9.86, 0]}>

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1}/>
            <color attach="background" args={['#040811']}/>
            <ambientLight intensity={0.9}/>
            <UserController/>
            <Logo/>
            <Score/>

            <Player/>
            <GroupBox/>
            <MagicBox/>
            <Plane/>

                
            <OrbitControls makeDefault enabled={false}/>
        </Physics>
      </AppContext.Provider>
    </Canvas>
  </>
}

export default App;
