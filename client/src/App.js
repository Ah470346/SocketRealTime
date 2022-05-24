import './App.css';
import {useEffect, useState} from 'react';
const { io } = require("socket.io-client");
import Home from './home';

const socket = io("");

function App() {
  const [name,setName] = useState("");
  useEffect(()=>{
    socket.on("connect", ()=>{
      socket.emit(name);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1> 
      <input type="text"/>
      <button>enter</button>  
    </div>
  );
}

export default App;
