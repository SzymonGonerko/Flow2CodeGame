import React, { useContext } from "react"
import { useThree, useFrame } from '@react-three/fiber'
import { useControls, button, folder } from 'leva'
import {AppContext} from "../App";

export const UserController = () => {
    const {state, setState} = useContext(AppContext)

    const controls = useThree((param) => {
      return param.controls
    })

    const { Horizontal, Vertical } = useControls({
      Task: "wystrzał armaty powinien być konfigurowany przez użytkownika",
      Horizontal: { value: 0.785, min: 0, max: Math.PI / 2 },
      Vertical: { value: Math.PI / 2, min: 1.2, max: 2 },
      Power: { value: 25, min: 0, max: 50 },
      Action: folder({
        'FIRE!': button(() => console.log('Fire!')),
      })
      
    })

    useFrame(() => {
      controls.setAzimuthalAngle(Horizontal)
      controls.setPolarAngle(Vertical)
      setState(prev => ({...prev, position: controls.getPolarAngle(Horizontal)})) 
    })
    return null
  }