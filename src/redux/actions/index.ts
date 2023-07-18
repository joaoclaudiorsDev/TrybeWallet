import { UserData, WalletData } from '../../types';
import { SET_USER, SET_WALLET } from './actionTypes';

export const setUserData = (userData: UserData) => ({
  type: SET_USER,
  payload: userData,
});
export const setWalletData = (walletData: WalletData) => ({
  type: SET_WALLET,
  payload: walletData,
});
