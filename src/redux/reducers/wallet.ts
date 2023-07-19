import { AnyAction } from 'redux';
import { SET_WALLET } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, ...action.payload.currencies };
    default:
      return state;
  }
};
export default walletReducer;
