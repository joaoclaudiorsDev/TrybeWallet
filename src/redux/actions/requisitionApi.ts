import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../types';
import { SET_WALLET } from './actionTypes';
import { setExchangeRate } from '.';

export const fetchCurrencies = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      if (data && Object.keys(data).length > 0) {
        const currencies = Object.keys(data);
        dispatch({ type: SET_WALLET, payload: { currencies } });
        dispatch(setExchangeRate(data));
      }
    } catch (error: any) {
      console.error('Erro ao obter as moedas:', error);
    }
  };
};
