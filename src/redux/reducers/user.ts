import { AnyAction } from 'redux';
import { SET_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const userData = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.payload.email,
        senha: action.payload.seha,

      };
    }
    default: return state;
  }
};

export default userData;
