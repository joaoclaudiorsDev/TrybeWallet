export type UserData = {
  email: string;
  senha: string;
};

export type WalletData = {
  resume: string,
  role: string,
  description:string,
};

export type AppState = {
  user: {
    email: string;
  };
};
