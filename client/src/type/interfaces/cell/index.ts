import { Col, Row } from "../../types/cell.type";

export interface ICellProps {
  value: string | null;
  colIdx: number;
  rowIdx: number;
  updateMatrix: (col:Col, row:Row) => void;
}