import React, {useState} from "react";


const container: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40px",
  fontFamily: "Shrikhand",
  flexDirection: "column",
  height: "100vh",
  width: "100vw"
}

const button: React.CSSProperties = {
  border: "1px solid black",
  borderRadius: "10px",
  fontFamily: "Shrikhand",
  backgroundColor: "white",
  width: "120px",
  height: "50px",
  fontSize: "30px",
  boxShadow: "0px 0px 36px -7px rgba(2, 23, 255, 1)",
  marginTop: "40px",
}

export const Loader: React.FC = () => {
  const [start, setStart] = useState<boolean>(false)

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target as HTMLButtonElement
    button.style.backgroundColor = "#00a0d370"
  }

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target as HTMLButtonElement
    button.style.backgroundColor = "white"
  }

  return <>
{!start && <>
    <div style={container}>
      <div>Flow2Code</div>
      <div>Greeting for</div>
      <div>all team!</div>
      <div>by SG</div>
      <button
        onClick={() => setStart(true)}
        onMouseEnter={(e) => handleEnter(e)}
        onMouseLeave={(e) => handleLeave(e)}
        style={button}>
          Start!
      </button>
    </div>
  </>}
</>
}
