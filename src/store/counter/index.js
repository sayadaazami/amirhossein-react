import { actions as globalActions } from "../global";

const counterActionNames = {
  INC: "INC",
  DEC: "DEC",
  ADD: "ADD",
  SUB: "SUB",
};
const initState = 0;

export const actions = {
  INC: () => ({ type: counterActionNames.INC }),
  DEC: () => ({ type: counterActionNames.DEC }),
  ADD: (value) => ({ type: counterActionNames.ADD, value }),
  SUB: (value) => ({ type: counterActionNames.SUB, value }),
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case globalActions.RESET:
      return initState;
    case counterActionNames.INC:
      return state + 1;
    case counterActionNames.DEC:
      return state - 1;
    case counterActionNames.ADD:
      return state + (action.value || 0);
    case counterActionNames.SUB:
      return state - (action.value || 0);
    default:
      return state;
  }
};
