import React, {useEffect, useState} from "react";
import { Text } from "@react-three/drei";
import Box from "../gltfjsx/Box"
import { useContext } from "react"
import {AppContext} from "../App";

const initialStyles = {
    fontSize: 0.6,
    color: "blue",
  };

export const MagicBox = () => {
    const {state, setState} = useContext(AppContext)
    const [isEnd, setIsEnd] = useState(false)

useEffect(() => {
    if (state.destroyed === 21) {
        setIsEnd(true)
    }
}, [state.destroyed])


    return <>
    <group position={[-20, -2, -20]}>
    {!isEnd && <>
        <Text {...initialStyles} text={"I'll open"} rotation={[0, 1, 0]} position={[0, 4, 0]}/>
        <Text {...initialStyles} text={"at the end..."} rotation={[0, 1, 0]} position={[0, 3, 0]}/>
    </>}

        <Box isEnd={isEnd} />
    </group>
    
    </>
}