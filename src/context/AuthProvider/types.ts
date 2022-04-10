export interface IUser {
  email?: string;
  token?: string;
}

export interface IAuthContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
