import React, { useMemo } from "react";
import { Vector3 } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {SpotLight, Sphere} from '@react-three/drei'
import Flow2Code from "../../gltfjsx/Flow2Code"
import { 
    propsFirstLight, 
    propsSecondLight, 
    propsThirdLight,
    propsFourthLight,
    propsFivethLight
} from './props'

export const Logo = () => {
    const firstSphere = useRef()
    const secSphere = useRef()
    
    const firstLight = useRef()
    const secondLight = useRef()
    const thirdLight = useRef()
    const fourthLight = useRef()
    const fivethLight = useRef()
    
    const direction = new Vector3()
    const correctScale = useMemo(() => window.innerWidth < 800 ? 3 : 7 ,[]);
    
    
    useFrame(() => {
        firstLight.current.target.position.lerp(direction.set(-25, 4, 1), 0.1)
        thirdLight.current.target.position.lerp(direction.set(-50, 10, 1), 0.1)
        secondLight.current.target.position.lerp(direction.set(-20, 10, 1), 0.1)
        fourthLight.current.target.position.lerp(direction.set(0, 11, 1), 0.1)
        fivethLight.current.target.position.lerp(direction.set(-26, 6, -12), 0.1)
    
        firstLight.current.target.updateMatrixWorld()
        thirdLight.current.target.updateMatrixWorld()
        secondLight.current.target.updateMatrixWorld()
        fourthLight.current.target.updateMatrixWorld()
        fivethLight.current.target.updateMatrixWorld()
    
          let time = Date.now() * 5
    
    
          let firstSphereX = (Math.sin( time * 0.00007) * 3)
          let firstSphereY = (Math.cos( time * 0.00007) / 2)
          let firstSphereZ = Math.sin( time * 0.00007)
    
          firstSphere.current.position.x = firstSphereX
          firstSphere.current.position.y = firstSphereY + 1.3
          firstSphere.current.position.z = firstSphereZ + 5
    
    
          let secSphereX = (Math.sin( time * 0.00007 ) * 2);
          let secSphereY = (Math.cos( time * 0.00007) / 2);
          let secSphereZ = Math.sin( time * 0.00007);
    
          secSphere.current.position.x = secSphereX + 1
          secSphere.current.position.y = secSphereY + 0.3
          secSphere.current.position.z = secSphereZ -1
      })



return <>
<group scale={correctScale} position={[-23, 4, 1]} rotation={[0, 1.6, 0]}>
    
    <Flow2Code/>

    <Sphere ref={firstSphere} args={[0, 0, 0]}>
        <SpotLight ref={firstLight} {...propsFirstLight}/>
    </Sphere>
    
    <Sphere ref={secSphere} args={[0, 0, 0]}>
        <SpotLight ref={secondLight} {...propsSecondLight}/>
    </Sphere>

    <SpotLight ref={thirdLight} {...propsThirdLight}/>
    <SpotLight ref={fourthLight} {...propsFourthLight}/>
    <SpotLight ref={fivethLight} {...propsFivethLight}/>

</group>
</>
}