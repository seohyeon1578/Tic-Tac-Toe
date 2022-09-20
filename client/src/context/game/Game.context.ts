import React from "react";
import { IGameContextProps } from './../../type/interfaces/game';

const defaultState: IGameContextProps = {
  isInRoom: false,
  setInRoom: () => {},
  playerSymbol: 'x',
  setPlayerSymbol: () => {},
};

export default React.createContext(defaultState);