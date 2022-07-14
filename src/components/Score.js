import { Text } from "@react-three/drei";
import { useContext } from "react"
import {AppContext} from "../App";

const initialStyles = {
    fontSize: 1,
    color: "blue",
  };

export const Score = () => {
    const {state, setState} = useContext(AppContext)

    return (<>
    <group position={[0, 1, 0]}>
        <Text {...initialStyles} text={"Destroyed: " + (state.destroyed) + "/21"} rotation={[0, 0.3, 0]} position={[-10, 7, -20]}/>
    </group>
    </>)
}