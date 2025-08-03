import { useState } from "react";

export default function SimpleButton() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return <button onClick={handleClick}>{state ? "ON" : "OFF"}</button>;
}
