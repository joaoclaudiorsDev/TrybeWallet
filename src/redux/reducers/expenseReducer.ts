import { AnyAction } from 'redux';
import { ExpenseData } from '../../types';
import { ADD_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE: ExpenseData[] = [];

const expensesReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expensesReducer;
