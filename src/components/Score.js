import { Html } from "@react-three/drei";
import { useContext } from "react"
import {AppContext} from "../App";

  const initStyles = {
    color: "#d0d0d0",
    fontSize: 45,
  }

  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "450px",
    height: "380px",
    backgroundColor: "rgba(12, 0, 255, 0.2)",
    fontFamily: "Shrikhand",
    borderRadius: "20px",
    boxShadow: "0px 0px 19px 0px rgba(255, 255, 255, 1)"
  }

  const titleStyles = {
    ...initStyles,
    textAlign: "center"
  }

  const regularStyles = {
    ...initStyles,
    paddingLeft: "20px"
  }

export const Score = () => {
    const {state} = useContext(AppContext)

    return <>
      <Html zIndexRange={-1} position={[-22, 10, -43]} rotation={[0, 0.6, 0]} transform>
        <div style={container}>
            <div style={titleStyles}>{state.player}!</div>

            <div style={regularStyles}>Destroyed:  {state.destroyed}/21</div>

            <div style={regularStyles}>
              Missed: <span style={{color: (state.missed > 0? "red":"#d0d0d0")}}>{state.missed}</span>
            </div>

            {state.destroyed === 21 && <>
              <div style={regularStyles}>
                Score: <span style={{color: "green"}}>{state.destroyed - state.missed}</span>
              </div>
              <div style={regularStyles}>
                Cool !
              </div>
              </>
            }
        </div>
      </Html>
    </>
}