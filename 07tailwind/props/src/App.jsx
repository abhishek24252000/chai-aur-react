import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let obj = {
    username: "abhi",
    email: "kdsa",
  };

  return (
    <>
      <Card name="abhi" myobj={obj} />
      <Card name="om" />
    </>
  );
}

export default App;
