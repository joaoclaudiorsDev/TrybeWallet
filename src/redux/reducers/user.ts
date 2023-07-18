import { AnyAction } from 'redux';
import { SET_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default: return state;
  }
};
