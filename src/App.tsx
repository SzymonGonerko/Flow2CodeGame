import React, {createContext, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Plane, Stars } from '@react-three/drei'
import { Player } from './components/Player';

import './App.css';


export const AppContext = createContext({})

const App : React.FC = () => {
  const [state, setState] = useState<{init: boolean, position: undefined | number}>({
    init: true,
    position: undefined
  })

  return (
    <>
      <Canvas>
      <AppContext.Provider value={{state, setState}}>
        <Plane position={[0, -2.5, 0]} args={[500, 500]} rotation={[-Math.PI / 2, 0, 0]} />
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
      </AppContext.Provider>
      </Canvas>
    </>
  );
}

export default App;
