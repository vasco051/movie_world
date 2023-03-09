export interface IUserStore {
  _isAuth: boolean;

  get isAuth(): boolean;

  setIsAuth(isAuth: boolean): void;
}
