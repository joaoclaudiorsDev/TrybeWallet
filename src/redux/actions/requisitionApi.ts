import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../types';
import { SET_WALLET } from './actionTypes';

export const fetchCurrencies = () => {
  return async (dispatch:Any) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();

      const filteredCurrencies = Object
        .keys(data).filter((currency) => currency !== 'USDT');
      dispatch({ type: SET_WALLET, payload: { currencies: filteredCurrencies } });
    } catch (error) {
      console.error('Erro ao obter as moedas:', error);
    }
  };
};
