import React, { useEffect } from 'react';
import socketConnect from './utils/socket';

function App(){
  const connect = async() => {
    try { 
      const socket = await socketConnect("http://localhost:8080")
    } catch(err) {
      console.log("Error: ", err)
    }
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <div>
      <h2>test1</h2>
    </div>
  );
}

export default App;
