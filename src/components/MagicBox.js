import { Html } from "@react-three/drei";
import { useContext } from "react"
import { AppContext } from "../App";
import Box from "../gltfjsx/Box"

const initialStyles = {
    fontSize: 21,
    color: "#d0d0d0",
    fontFamily: "Shrikhand"
  };

export const MagicBox = () => {
    const {state} = useContext(AppContext)

    return <>
    <group position={[-20, -2, -20]}>
        {state.destroyed !== 21 && 
            <>
                <Html rotation={[0, 1, 0]} position={[2.5, 3, 2]} transform>
                    <div style={initialStyles}>
                    I'll open
                    </div>
                    <div style={initialStyles}>
                    at the end...
                    </div>
                </Html>
            </>
        }
        <Box/>
    </group>
    </>
}