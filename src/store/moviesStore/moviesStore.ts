import axios from "axios";
import { makeAutoObservable } from "mobx";

import { MovieService } from "../../API/rest/movieService";
import { movOrders, movTypes } from "../../models/commonModels";
import { IMoviesStore } from "./IMoviesStore";


export class MoviesStore implements IMoviesStore {
  _loading: boolean;
  _error: string | null;
  _order: movOrders;
  _type: movTypes;
  _page: number;

  constructor() {
    this._loading = false;
    this._error = null;
    this._order = movOrders.numValue;
    this._type = movTypes.film;
    this._page = 1;
    makeAutoObservable(this);
  }

  // gets
  get isLoading() {
    return this._loading;
  }

  get isError() {
    return this._error;
  }

  get order() {
    return this._order;
  }

  get type() {
    return this._type;
  }

  get page() {
    return this._page;
  }

  // sets
  setLoading(loading: boolean) {
    this._loading = loading;
  }

  setError(error: string | null) {
    this._error = error;
  }

  setOrder(order: movOrders) {
    this._order = order;
  }

  setType(type: movTypes) {
    this._type = type;
  }

  setPage(page: number) {
    this._page = page;
  }

  // async
  async getMovies() {
    try {
      this.setLoading(true);

      const response = await MovieService.allMovies(this.page, this.order, this.type);

      this.setError(null);

      return response;
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