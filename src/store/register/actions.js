export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";

export function setUser(user) {
  console.log('ACTION_USER',user)
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
