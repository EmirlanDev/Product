import { actionType } from "../actionsType";

const INIT_STATE = {
  dark: false,
};

export const Reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.DARK: {
      return { ...state, dark: action.payload };
    }
    default: {
      return state;
    }
  }
};
