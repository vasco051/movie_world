import { makeAutoObservable } from "mobx";

import { IUser } from "../../models/userModels";
import AuthService from "../../API/rest/AuthService";
import { IAuthStore } from "./IAuthStore";


export default class AuthStore implements IAuthStore {
  _isAuth: boolean = false
  _isLoading: boolean = false
  _isError: string = ""


  constructor() {
    makeAutoObservable(this)
  }


  // gets
  get isAuth() {
    return this._isAuth
  }

  get isLoading() {
    return this._isLoading
  }

  get isError() {
    return this._isError
  }


  // sets
  setAuth(auth: boolean) {
    if (!auth) localStorage.removeItem("auth_token")
    this._isAuth = auth
  }

  setError(error: string) {
    this._isError = error
  }

  setLoading(value: boolean) {
    this._isLoading = value
  }


  // async
  async authorization(user: IUser) {
    this.setLoading(true)

    const response = await AuthService.authorization(user)

    if ("data" in response) {
      localStorage.setItem("auth_token", response.data.token)

      this.setError("")
      this.setAuth(true)
      this.setLoading(false)

      return response
    }

    if (response.status === 401) this.setError("Неправильный логин или пароль")

    this.setLoading(false)
    return response
  }
}
