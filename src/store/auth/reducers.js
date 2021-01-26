import { SET_USER, SET_TOKEN, RESET_REDUCER_GROUP } from "./actions";

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
      // console.log("REDUCER_USER", state.user);
      return state;

    case SET_TOKEN:
      state.token = action.payload.token;
      // console.log("REDUCER_TOKEN", state.token);
      return state;
    case RESET_REDUCER_GROUP:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}
