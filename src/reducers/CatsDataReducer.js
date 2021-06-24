import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    catsData: [],
};

export default (state = initialState, action) => {
  const { type } = action;
console.log("reducer",action)
  switch (type) {
    case "CATS_DATA":
      return { ...state, catsData: action.payLoad };
      return action.data;
    default:
      return state;
  }
};