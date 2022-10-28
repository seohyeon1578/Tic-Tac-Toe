import { IPlayerSymbol } from './../../types/game.type';

export interface IGameState {
  x: number,
  o: number,
  draw: number,
  [key: string]: number
}

export interface IStartGame {
  start: boolean;
  symbol: IPlayerSymbol;
}