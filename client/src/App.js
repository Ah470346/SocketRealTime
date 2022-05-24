import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Home from "./home";

const socket = io("");

function App() {
  const [name, setName] = useState("");
  const onClick = () => {
    const inputName = document.querySelector(".App input");
    console.log(inputName.value);
    socket.emit("name", inputName.value);
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("doclenh", (mgs) => {
      console.log(mgs);
    });
    // return () => {
    //   socket.disconnect();
    //   socket.close();
    // };
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" />
      <button onClick={onClick}>enter</button>
      <Home></Home>
    </div>
  );
}

export default App;
