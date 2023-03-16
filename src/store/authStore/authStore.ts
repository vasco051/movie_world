import { IUser } from "../../models/userModels";
import AuthService from "../../API/AuthService";
import axios from "axios";
import { IAuthStore } from "./IAuthStore";
import { makeAutoObservable } from "mobx";


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
    if (!auth) localStorage.removeItem('auth_token')
    this._isAuth = auth
  }

  setError(error: string) {
    this._isError = error
  }

  setLoading(value: boolean) {
    this._isLoading = value
  }


  // async
  // TODO подумать над возвращаемыми значениями
  async authorization(user: IUser) {
    try {
      this.setLoading(true)

      const response = await AuthService.authorization(user)

      localStorage.setItem('auth_token', response.data.token);
      this.setAuth(true)
      this.setError('')

      return response

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        this.setError(err.message)
        return err
      }

    } finally {
      this.setLoading(false)
    }
  }
}
