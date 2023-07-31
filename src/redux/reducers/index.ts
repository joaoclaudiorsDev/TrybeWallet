import { combineReducers } from 'redux';
import userReducer from './userReducer';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default rootReducer;
