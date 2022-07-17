import { Box } from "../components/Box"
import { Shadow } from "@react-three/drei";
import { AppContext } from "../App";
import { useContext } from "react"

export const GroupBox = () => {
    const {state} = useContext(AppContext)
    return <>
           <Shadow
            color={(state.divisions.first.length === 9 ? "green": "red")}
            position={[-20.8, -1.99, -12.5]}
            scale={10}
            colorStop={0}
            opacity={0.6}
            />
                <Box division={"first"} position={[-21, -0.5, -12]}/>
                <Box division={"first"} position={[-21, -1.5, -12]}/>
                <Box division={"first"} position={[-21, -1.5, -13]}/>
                <Box division={"first"} position={[-21, -0.5, -13]}/>
                <Box division={"first"} position={[-21, -1.5, -14]}/>
                <Box division={"first"} position={[-21, -0.5, -14]}/>
                <Box division={"first"} position={[-21, 0.5, -12]}/>
                <Box division={"first"} position={[-21, 0.5, -13]}/>
                <Box division={"first"} position={[-21, 0.5, -14]}/>


           <Shadow
            color={(state.divisions.second.length === 12 ? "green": "red")}
            position={[-7, -1.99, -30]}
            scale={13}
            colorStop={0}
            opacity={0.6}
            />
                <Box division={"second"} position={[-6, -1.5, -30]}/>
                <Box division={"second"} position={[-7, -1.5, -30]}/>
                <Box division={"second"} position={[-8, -1.5, -30]}/>
                <Box division={"second"} position={[-6, -0.5, -30]}/>
                <Box division={"second"} position={[-7, -0.5, -30]}/>
                <Box division={"second"} position={[-8, -0.5, -30]}/>
                <Box division={"second"} position={[-6, 0.5, -30]}/>
                <Box division={"second"} position={[-7, 0.5, -30]}/>
                <Box division={"second"} position={[-8, 0.5, -30]}/>
                <Box division={"second"} position={[-7.5, 1.5, -30]}/>
                <Box division={"second"} position={[-6.5, 1.5, -30]}/>
                <Box division={"second"} position={[-7, 2.5, -30]}/>
    </>
}