import React, { useState, useContext } from "react";
import GameContext from "../../context/game/Game.context";
import { joinGameRoom } from "../../utils/game";
import { socketService } from "../../utils/socket";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [isJoining, setJoining] = useState(false);

  const { isInRoom, setInRoom } = useContext(GameContext);
  
  const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value); 
  
  const joinRoom = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const socket = socketService.getSocket();
    if(!roomId || roomId.trim() === "" || !socket) return;

    setJoining(true);
    
    let joined: boolean = false;
    try {
      joined = await joinGameRoom(socket, roomId)
    }catch(err) {
      alert(err);
    }

    if(joined) setInRoom(true);

    setJoining(false);
  };
  
  return(
    <form onSubmit={joinRoom}>
      <input value={roomId} onChange={handleRoomIdChange}/>
      <button type="submit" disabled={isJoining}>{isJoining ? "입장중...." : "입장"}</button>
    </form>
  );
};

export default JoinRoom;