import React, { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";
import { inRoom } from "../../store/game/inRoom";
import { IList } from "../../type/interfaces/room";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomList, setRoomList] = useState<IList>([]);
  const [isJoining, setJoining] = useState(false);
  
  const [isInRoom, setInRoom] = useRecoilState(inRoom);

  const connect = useCallback(async() => {
    const socket = await socketService
      .connect("http://localhost:8080")
      .catch((err) => {
        console.log("Error: ", err);
      });
    getRoomList()
  }, []);

  const getRoomList = async() => {
    const socket = socketService.socket;
    if(!socket) return;
    const list = await gameService
      .getRoomList(socket, (list : IList) => {
        setRoomList(list)
      }).catch((err) => {
        console.log(err);
      });
  }

  const handleRoomNameChange = (e: React.ChangeEvent<any>) => setRoomName(e.target.value);

  const joinRoom = async(e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let roomId = ""
    if(e.type === "submit"){
      roomId = roomName
    }else if (e.type === "click"){
      roomId = (e.target as HTMLButtonElement).value
    }

    const socket = socketService.socket;
    if (!roomId || roomId.trim() === "" || !socket) return;
    
    setJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomId)
      .catch((err) => {
        console.log(err);
      });

    if (joined) setInRoom(true);

    setJoining(false);
  };

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <>
      <form onSubmit={joinRoom}>
          <input
            value={roomName}
            onChange={handleRoomNameChange}
          />
          <button type="submit" disabled={isJoining}>
            {isJoining ? "입장중..." : "입장"}
          </button>
      </form>
      <div>
        {roomList.map((list) => (
          <button onClick={joinRoom} value={list.name}>
            {list.name}
            {list.size}
          </button>
        ))}
      </div>
    </>
  );
};

export default JoinRoom;