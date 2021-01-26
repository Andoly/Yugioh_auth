import { SET_USER, SET_TOKEN } from "./actions";

const INITIAL_STATE = {
  user: null,
  token: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      if (action.payload.user) {
        state = { ...state.user, ...action.payload.user };
      } else {
        state.user = null;
      }
      return state;

    case SET_TOKEN:
      state.token = action.payload.token;
      return state;

    default:
      return state;
  }
}
