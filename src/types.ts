import { REQUEST_STARTED, REQUEST_ERROR, ADD_EXPENSE } from './redux/actions/actionTypes';

export type UserData = {
  email: string;
  senha: string;
};

export type RootState = {
  user: {
    email: string;
  };
  expenses: ExpenseData[];
  wallet: {
    exchangeRate: ExchangeRate;
    currencies: string[];
  };
};

export type StateType = {
  user: UserData;
  wallet: RootState;
};

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const requestError = (error: string) => ({
  type: REQUEST_ERROR,
  payload: error,
});

export type ExpenseData = {
  id?: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
};

export type AppState = {
  user: {
    email: string;
  };
  wallet: {
    exchangeRate: ExchangeRate;
    currencies: string[];
    expenses: ExpenseData[];
  };
};
export type ExchangeRate = {
  [currency: string]: {
    code: string;
    name: string;
    bid: number;
    ask: number;
    timestamp: number;
    create_date: string;
  };
};
