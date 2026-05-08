import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

function Loading() {
  const style = {
    backdropFilter: "blur(10px)",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <TailChase size="100" speed="2" color="black" />
    </div>
  );
}

export default Loading;
