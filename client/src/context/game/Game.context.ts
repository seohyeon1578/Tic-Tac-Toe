import React from "react";
import { IGameContextProps } from './../../type/interfaces/game';

const defaultState: IGameContextProps = {
  isInRoom: false,
  setInRoom: () => {},
  playerSymbol: 'x',
  setPlayerSymbol: () => {},
  isPlayerTurn: false,
  setPlayerTurn: () => {},
  isGameStart: false,
  setGameStart: () => {},
};

export default React.createContext(defaultState);