import { makeAutoObservable } from "mobx";
import AuthService from "../../API/rest/AuthService";

import { IUser } from "../../models/userModels";
import { IAuthStore } from "./IAuthStore";


export default class AuthStore implements IAuthStore {
  _isAuth: boolean;
  _isLoading: boolean;
  _isError: string | null;


  constructor() {
    this._isAuth = false;
    this._isLoading = false;
    this._isError = null;
    makeAutoObservable(this);
  }


  // gets
  get isAuth() {
    return this._isAuth;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isError() {
    return this._isError;
  }


  // sets
  setAuth(auth: boolean) {
    if (!auth) {
      localStorage.removeItem("auth_token");
    }
    this._isAuth = auth;
  }

  setError(error: string | null) {
    this._isError = error;
  }

  setLoading(value: boolean) {
    this._isLoading = value;
  }


  // async
  async authorization(user: IUser) {
    this.setLoading(true);

    const response = await AuthService.authorization(user);

    if ("data" in response) {
      localStorage.setItem("auth_token", response.data.token);

      this.setError(null);
      this.setAuth(true);
      this.setLoading(false);

      return response;
    }

    if (response.status === 401) {
      this.setError("Неправильный логин или пароль");
    }

    this.setLoading(false);
    return response;
  }
}
