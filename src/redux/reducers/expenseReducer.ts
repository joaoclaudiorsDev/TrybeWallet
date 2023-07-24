import { AnyAction } from 'redux';
import { ADD_EXPENSE } from '../actions/actionTypes';
import { ExpenseData } from '../../types';

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
