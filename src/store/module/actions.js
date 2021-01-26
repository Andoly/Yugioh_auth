export const ADD_INPUT = "ADD_INPUT";

export function addInput(input) {
  return {
    type: ADD_INPUT,
    payload: input,
  };
}
