/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import url from "../objects/Flow2Code.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
      <mesh geometry={nodes.Curve005.geometry} material={materials['Material.001']} position={[-1.3, 0, 0]} rotation={[1.62, 0, 0]} scale={16.57} />
    </group>
  )
}

useGLTF.preload('/Flow2Code.glb')