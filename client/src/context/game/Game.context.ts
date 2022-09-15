import React from "react";
import { IGameContextProps } from './../../type/interfaces/game';

const defaultState: IGameContextProps = {
  isInRoom: false,
  setInRoom: () => {},
};

export default React.createContext(defaultState);