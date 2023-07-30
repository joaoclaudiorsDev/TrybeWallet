import { combineReducers } from 'redux';
import expensesReducer from './expenseReducer';
import userReducer from './userReducer';
import wallet from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet,
  expenses: expensesReducer,
});

export default rootReducer;
