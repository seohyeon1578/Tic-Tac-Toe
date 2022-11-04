import { atom } from "recoil";
import { IPlayerSymbol } from "../../type/types/game.type";

export const symbolState = atom<IPlayerSymbol>({
  key: "symbolState",
  default: "X"
})