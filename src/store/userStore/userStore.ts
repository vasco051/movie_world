import { makeAutoObservable } from "mobx";

import { IUserStore } from "./IUserStore";


export default class UserStore implements IUserStore {
  constructor() {
    makeAutoObservable(this);
  }

  _isAuth: boolean = false;

  // gets
  get isAuth() {
    return this._isAuth;
  }

  // sets
  setIsAuth(isAuth: boolean) {
    isAuth
      ? localStorage.setItem('auth', 'true')
      : localStorage.removeItem('auth')

    this._isAuth = isAuth;
  }
}
