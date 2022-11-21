import React, { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";
import { inRoom } from "../../store/game/inRoom";
import { roomId } from "../../store/game/roomId";
import { nameState } from "../../store/user/nameState";
import { IList } from "../../type/interfaces/room";
import * as J from "./JoinRoom.style";

const JoinRoom = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomList, setRoomList] = useState<IList>([]);
  const [isJoining, setJoining] = useState(false);
  
  const [name, setName] = useRecoilState(nameState);
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  const [roomIdValue, setRoomId] = useRecoilState(roomId);

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

  const handleUserNameChange = (e: React.ChangeEvent<any>) => setUserName(e.target.value);

  const joinRoom = async(e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let roomId = ""
    if(e.type === "submit"){
      roomId = roomName
      setRoomId(roomName)
    }else if (e.type === "click"){
      roomId = (e.target as HTMLButtonElement).value
      setRoomId((e.target as HTMLButtonElement).value)
    }

    const socket = socketService.socket;
    if (!roomId || roomId.trim() === "" || !socket) return;
    
    setJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomId, userName)
      .catch((err) => {
        console.log(err);
      });

    if (joined) setInRoom(true);

    setName({
      my: userName,
      other: ''
    });
    setJoining(false);
  };

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <J.Container>
      <J.UserNameInput 
        value={userName}
        onChange={handleUserNameChange}
        placeholder="이름"
      />
      <J.Form onSubmit={joinRoom}>
          <J.NameInput
            value={roomName}
            onChange={handleRoomNameChange}
            placeholder="방 이름을 입력해주세요."
          />
          <J.JoiningBtn type="submit" disabled={isJoining}>
            {isJoining ? "입장중..." : "입장"}
          </J.JoiningBtn>
      </J.Form>
      <J.RoomList>
        {roomList.map((list, idx) => (
          <J.Room onClick={joinRoom} key={idx} value={list.name}>
            <J.RoomName>{list.name}</J.RoomName>
            <J.RoomSize>인원: {list.size}</J.RoomSize>
          </J.Room>
        ))}
      </J.RoomList>
    </J.Container>
  );
};

export default JoinRoom;