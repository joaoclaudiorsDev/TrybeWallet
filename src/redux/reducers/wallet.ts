import { AnyAction } from 'redux';
import { SET_WALLET } from '../actions/actionTypes';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, ...action.payload };
    default: return state;
  }
};
