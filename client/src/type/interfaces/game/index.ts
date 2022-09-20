import { PlayerSymbol } from './../../types/game.type';

export interface IGameContextProps {
  isInRoom: boolean;
  setInRoom: (inRoom: boolean) => void;
  playerSymbol: PlayerSymbol;
  setPlayerSymbol: (symbol: PlayerSymbol) => void;
}
