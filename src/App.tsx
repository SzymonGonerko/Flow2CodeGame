import { Canvas } from '@react-three/fiber'
import {OrbitControls, Environment, Plane } from '@react-three/drei'

import './App.css';

const App : React.FC = () => {
  return (
    <>
      <Canvas >
        <Plane args={[2, 2]} rotation={[-Math.PI / 2, 0, 0]} />
        <Environment preset="night" background />
        <OrbitControls enabled={true} />
      </Canvas>
    </>
  );
}

export default App;
