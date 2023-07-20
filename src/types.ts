import { REQUEST_STARTED, REQUEST_ERROR } from './redux/actions/actionTypes';

export type UserData = {
  email: string;
  senha: string;
};

export type RootState = {
  wallet: {
    currencies: string[];
  };
};

export type StateType = {
  user: UserData;
  wallet: RootState;
};

export type AppState = {
  user: {
    email: string;
  };
};

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const requestError = (error: string) => ({
  type: REQUEST_ERROR,
  payload: error,
});
