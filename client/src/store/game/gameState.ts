import { atom } from "recoil";

export const gameState = atom({
  key: "gameState",
  default: {
    x: 0,
    o: 0,
    draw: 0,
  }
})