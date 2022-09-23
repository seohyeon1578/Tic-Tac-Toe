import { IPlayerSymbol } from './../../types/game.type';

interface IColRow {
  col: number;
  row: number;
}

export interface ICellProps extends IColRow{
  value: string | null;
  updateMatrix: ({col, row, symbol}: IMatrix) => void;
}

export interface IMatrix extends IColRow{
  symbol: IPlayerSymbol;
}