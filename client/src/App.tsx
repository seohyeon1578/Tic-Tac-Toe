import React, { useEffect } from 'react';
import { io } from "socket.io-client";

function App(){
  const connet = () => {
    const socket = io("http://localhost:8080");
  };

  useEffect(() => {
    connet();
  },[]);
  return (
    <div>
      <h2>test1</h2>
    </div>
  );
}

export default App;
