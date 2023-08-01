import { AnyAction } from 'redux';
import { ADD_EXPENSE, SET_WALLET, SET_EXCHANGE_RATE } from '../actions/actionTypes';
import { ExpenseData } from '../../types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRate: {},
};

const handleAddExpense = (state: any, action: AnyAction) => {
  const newExpense: ExpenseData = {
    id: state.expenses.length,
    value: action.payload.value,
    currency: action.payload.currency,
    method: action.payload.method,
    tag: action.payload.tag,
    description: action.payload.description,
    exchangeRates: { ...state.exchangeRate },
  };
  return { ...state, expenses: [...state.expenses, newExpense] };
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, currencies: action.payload.currencies };
    case ADD_EXPENSE:
      return handleAddExpense(state, action);
    case SET_EXCHANGE_RATE:
      return { ...state, exchangeRate: action.payload };
    default:
      return state;
  }
};

export default walletReducer;
