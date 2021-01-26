import { ADD_INPUT } from "./actions";

const INITIAL_STATE = {
  inputSet: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_INPUT:
      state = { ...state, inputSet: [...state.inputSet, action.payload] };
      console.log("stateReducers", state);
      return state;
  
    default:
      return state;
  }
}
