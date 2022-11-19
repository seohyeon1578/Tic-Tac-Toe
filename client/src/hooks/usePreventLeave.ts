import { useRecoilState } from 'recoil';
import { roomId } from './../store/game/roomId';
import { inRoom } from './../store/game/inRoom';
import gameService from '../services/gameService';
import socketService from '../services/socketService';

const usePreventLeave = () => {
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  const [roomIdValue, setRoomId] = useRecoilState(roomId);

  const listener = (e : BeforeUnloadEvent) => {
    e.preventDefault();
    if(socketService.socket && isInRoom){
      gameService.leaveGameRoom(socketService.socket, roomIdValue);
      setInRoom(false);
    }
  }

  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  }

  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  }

  return {enablePrevent, disablePrevent}
}

export default usePreventLeave;