export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const RESET_REDUCER_GROUP = "RESET_REDUCER_GROUP";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}
export function setResetToken() {
  return {
    type: RESET_REDUCER_GROUP,
    payload: '',
  };
}
