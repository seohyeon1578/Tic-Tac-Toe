import { atom } from "recoil";
import { IGameState } from "../../type/interfaces/game";

export const gameState = atom<IGameState>({
  key: "gameState",
  default: {
    x: 0,
    o: 0,
    draw: 0
  }
})