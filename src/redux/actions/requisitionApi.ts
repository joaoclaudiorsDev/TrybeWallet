import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { requestStarted, requestError, StateType, RootState } from '../../types';
import { SET_WALLET } from './actionTypes';
// export const fetchCurrencies = () => {
//   return (dispatch: ThunkDispatch<StateType, null, AnyAction>) => {
//     fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredCurrencies = Object
//           .keys(data).filter((currency) => currency !== 'USDT');
//         dispatch({ type: SET_WALLET, payload: { currencies: filteredCurrencies } });
//       })
//       .catch((error) => {
//         console.error('Erro ao obter as moedas:', error);
//       });
//   };
// };

export function fetchCurrencies(): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(requestStarted());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      if (data && Object.keys(data).length > 0) {
        const filteredCurrencies = Object.keys(data);
        dispatch({ type: SET_WALLET, payload: { currencies: filteredCurrencies } });
      }
    } catch (error: any) {
      dispatch(requestError(error.message));
    }
  };
}
