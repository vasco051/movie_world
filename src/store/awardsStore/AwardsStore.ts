import { makeAutoObservable, observable, values } from "mobx";
import { IAward } from "../../models/movieModels";
import AwardsService from "../../API/AwardsServise";
import { IAwardsStore } from "./IAwardsStore";


export default class AwardsStore implements IAwardsStore{
  _awards = observable.map<number, IAward>()
  _isLoading: boolean = false
  _isError: string = ""


  constructor() {
    makeAutoObservable(this)
  }


  // gets
  get list() {
    return values(this._awards)
  }

  get isLoading() {
    return this._isLoading
  }

  get isError() {
    return this._isError
  }


  // sets
  setLoading(value: boolean) {
    this._isLoading = value
  }

  setError(error: string) {
    this._isError = error
  }

  // Нет адекватного ID, поэтому приходится делать индексом. Обращаться всё равно к ним не буду
  setAwards(awards: IAward[]) {
    awards.forEach((award, index) => {
      this._awards.set(index, award)
    })
  }


  async fetchAwards(id: string | number) {
    try {
      this.setLoading(true)
      this._awards.clear()

      const response = await AwardsService.awardsById(id)
      this.setAwards(response.data.items)

    } catch (e: any) {
      this.setError(e.message)

    } finally {
      this.setLoading(false)
    }
  }
}