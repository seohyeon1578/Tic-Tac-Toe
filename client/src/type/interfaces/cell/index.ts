interface IColRow {
  col: number;
  row: number;
}

export interface ICellProps extends IColRow{
  value: string | null;
  updateMatrix: (iMatrix: IMatrix) => void;
}

export interface IMatrix extends IColRow{
  symbol: 'x' | 'o';
}