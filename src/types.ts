export type UserData = {
  email: string;
  senha: string;
};

export type RootState = {
  wallet: {
    currencies: string[];
  };
};

export type AppState = {
  user: {
    email: string;
  };
};
