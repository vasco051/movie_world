import axios from "axios";
import { makeAutoObservable, observable, ObservableMap, values } from "mobx";
import AwardsService from "../../API/rest/AwardsService";
import { IAward } from "../../models/movieModels";
import { IAwardsStore } from "./IAwardsStore";


export default class AwardsStore implements IAwardsStore {
  _awards: ObservableMap<number, IAward>;
  _isLoading: boolean;
  _isError: string | null;


  constructor() {
    this._awards = observable.map<number, IAward>();
    this._isLoading = false;
    this._isError = null;
    makeAutoObservable(this);
  }


  // gets
  get list() {
    return values(this._awards);
  }

  get isLoading() {
    return this._isLoading;
  }

  get isError() {
    return this._isError;
  }


  // sets
  setLoading(value: boolean) {
    this._isLoading = value;
  }

  setError(error: string | null) {
    this._isError = error;
  }

  // Нет адекватного ID, поэтому приходится делать индексом. Обращаться всё равно к ним не буду
  setAwards(awards: IAward[]) {
    awards.forEach((award, index) => {
      this._awards.set(index, award);
    });
  }


  async fetchAwards(id: string | number) {
    try {
      this.setLoading(true);
      this._awards.clear();

      const response = await AwardsService.awardsById(id);

      this.setError(null);
      this.setAwards(response.data.items);
    }
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        this.setError(error.message);
      }
    }
    finally {
      this.setLoading(false);
    }
  }
}