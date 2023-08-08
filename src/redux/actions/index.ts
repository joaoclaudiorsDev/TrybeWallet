import { AnyAction } from 'redux';
import { UserData, ExpenseData, ExchangeRate } from '../../types';
import {
  SET_USER,
  SET_WALLET,
  ADD_EXPENSE,
  SET_EXCHANGE_RATE,
  SET_DELETE_EXPENSE,
} from './actionTypes';

export const setUserData = (userData: UserData) => ({
  type: SET_USER,
  payload: userData,
});

export const setWalletData = (walletData: AnyAction) => ({
  type: SET_WALLET,
  payload: walletData,
});

export const addExpense = (expense: ExpenseData) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const setExchangeRate = (exchangeRate: ExchangeRate) => ({
  type: SET_EXCHANGE_RATE,
  payload: exchangeRate,
});

export const setDeletExpense = (expenseId: number) => {
  return {
    type: SET_DELETE_EXPENSE,
    payload: expenseId,
  };
};
