import { UserData, WalletData } from '../../types';
import { SET_USER, SET_WALLET } from './actionTypes';

export const setUserData = (loginData: UserData) => ({
  type: SET_USER,
  payload: loginData,
});
export const setWalletData = (walletData: WalletData) => ({
  type: SET_WALLET,
  payload: walletData,
});
