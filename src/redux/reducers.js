import { SET_PRODUCT } from './actions';

const initialState = {
  product: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
