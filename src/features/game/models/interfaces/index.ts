import { PieceType, Set } from '../enums';

export interface Square {
  id: number;
  position: Position;
  location: string;
  color: string;
  takenBy: Piece | null;
  isPlayable: boolean;
  isPossibleMove: boolean;
  isImmediateMove: boolean;
}

export interface TakenSquare extends Square {
  takenBy: Piece;
}

export interface Piece {
  id: number;
  position: Position;
  location: string;
  type: PieceType;
  set: Set;
  isKing: boolean;
}

export interface Position {
  rowIndex: number;
  columnIndex: number;
}

export interface Move {
  square: Square;
  capturedSquare: TakenSquare | null;
  isCaptureMove: boolean;
  isImmediateMove: boolean;
}
