import { useContext, useEffect } from "react"
import { useThree, useFrame } from '@react-three/fiber'
import { useControls, button, folder } from 'leva'
import {AppContext} from "../App";

export const UserController = () => {
    const {state, setState} = useContext(AppContext)

    const controls = useThree((param) => {
      return param.controls
    })

    const { horizontal, vertical, power, zoom, player } = useControls({
      player: state.player,
      horizontal: { value: Math.PI / 2, min: 0, max: Math.PI / 2 },
      vertical: { value: Math.PI / 2, min: 1.2, max: 1.95 },
      power: { value: 30, min: 20, max: 70 },
      zoom: { value: 1, min: 1, max: 2 },
      Action: folder({
        'FIRE!': button(() => setState(prev => ({...prev, shot: true}))),
        'RESET': button(() => setState(prev => ({...prev, reset: true}))),
      })
      
    })

    useEffect(() => {
      setState(prev => ({...prev, power: power, zoom: zoom, player: player})) 
    }, [state])

    useFrame(() => {
      if (!controls) return
      controls.setAzimuthalAngle(horizontal)
      controls.setPolarAngle(vertical)
    })
    return null
  }