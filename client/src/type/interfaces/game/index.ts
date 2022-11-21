import { IPlayerSymbol } from './../../types/game.type';

export interface IGameState {
  x: number,
  o: number,
  draw: number,
  [key: string]: number
}

export interface IWinner {
  winLine?: any;
  winner?: string;
  notWin?: boolean; 
}

export interface IStartGame {
  start: boolean;
  symbol: IPlayerSymbol;
  name: string;
}