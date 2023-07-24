import { AnyAction } from 'redux';
import { ADD_EXPENSE, SET_WALLET, SET_EXCHANGE_RATE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRate: {},
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, currencies: action.payload.currencies };
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case SET_EXCHANGE_RATE:
      return { ...state, exchangeRate: action.payload };
    default:
      return state;
  }
};

export default walletReducer;
