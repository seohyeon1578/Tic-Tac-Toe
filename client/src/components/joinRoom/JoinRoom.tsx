import React, { useContext, useState } from "react";
import gameContext from "../../context/game/Game.context";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [isJoining, setJoining] = useState(false);

  const { isInRoom, setInRoom } = useContext(gameContext);

  const handleRoomNameChange = (e: React.ChangeEvent<any>) => setRoomName(e.target.value);

  const joinRoom = async (e: React.FormEvent) => {
    e.preventDefault();

    const socket = socketService.socket;
    if (!roomName || roomName.trim() === "" || !socket) return;

    setJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomName)
      .catch((err) => {
        alert(err);
      });

    if (joined) setInRoom(true);

    setJoining(false);
  };

  return (
    <form onSubmit={joinRoom}>
        <input
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <button type="submit" disabled={isJoining}>
          {isJoining ? "입장중..." : "입장"}
        </button>
    </form>
  );
};

export default JoinRoom;