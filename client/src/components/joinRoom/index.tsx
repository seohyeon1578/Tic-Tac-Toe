import React, { useState, useContext } from "react";
import GameContext from "../../context/game/Game.context";
import joinGameRoom from "../../utils/game";
import { socketService } from "../../utils/socket";

export const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const { isInRoom, setInRoom } = useContext(GameContext);
  
  const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value); 
  
  const joinRoom = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const socket = socketService.getSocket();
    if(!roomId || roomId.trim() === "") return;

    setIsJoining(true);
    
    try {
      const joined = await joinGameRoom(socket, roomId)
    }catch(err) {
      alert(err);
    }

    setIsJoining(false);
  };
  
  return(
    <form onSubmit={joinRoom}>
      <input value={roomId} onChange={handleRoomIdChange}/>
      <button type="submit" disabled={isJoining}>{isJoining ? "입장중...." : "입장"}</button>
    </form>
  );
};