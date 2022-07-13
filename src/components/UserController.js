import React, { useContext } from "react"
import { useThree, useFrame } from '@react-three/fiber'
import { useControls, button, folder } from 'leva'
import {AppContext} from "../App";

export const UserController = () => {
    const {state, setState} = useContext(AppContext)

    const controls = useThree((param) => {
      return param.controls
    })

    const { Horizontal, Vertical, Power } = useControls({
      Task: "wystrzał armaty powinien być konfigurowany przez użytkownika",
      Horizontal: { value: 0.785, min: 0, max: Math.PI / 2 },
      Vertical: { value: Math.PI / 2, min: 1.2, max: 2 },
      Power: { value: 55, min: 20, max: 120 },
      Action: folder({
        'FIRE!': button(() => setState(prev => ({...prev, shot: true}))),
      })
      
    })

    useFrame(() => {
      if (!controls) return
      controls.setAzimuthalAngle(Horizontal)
      controls.setPolarAngle(Vertical)
      setState(prev => ({...prev, Power: Power})) 
    })
    return null
  }