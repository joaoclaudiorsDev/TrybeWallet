import { AnyAction } from 'redux';
import { SET_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.payload.email,
        senha: action.payload.senha,

      };
    }
    default: return state;
  }
};

export default userReducer;
