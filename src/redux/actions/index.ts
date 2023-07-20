import { AnyAction } from 'redux';
import { UserData, RootState } from '../../types';
import { SET_USER, SET_WALLET } from './actionTypes';

export const setUserData = (userData: UserData) => ({
  type: SET_USER,
  payload: userData,
});

export const setWalletData = (walletData: AnyAction) => ({
  type: SET_WALLET,
  payload: walletData,
});
