import { actionType } from "./actionsType";

export function DarkMode(dark) {
  return { type: actionType.DARK, payload: !dark };
}
