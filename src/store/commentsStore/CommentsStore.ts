import { makeAutoObservable, observable, values } from "mobx";
import { IComment } from "../../models/movieModels";
import CommentsService from "../../API/rest/CommentsService";
import { ICommentsStore } from "./ICommentsStore";
import axios, { AxiosError } from "axios";


export default class CommentsStore implements ICommentsStore {
  _comments = observable.map<number, IComment>()
  _isLoading: boolean = false
  _isError: string = ""


  constructor() {
    makeAutoObservable(this)
  }


  // gets
  get list() {
    return values(this._comments)
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

  setComments(comments: IComment[]) {
    comments.forEach(comment => {
      this._comments.set(comment.kinopoiskId, comment)
    })
  }


  async fetchComments(id: string | number) {
    try {
      this.setLoading(true)
      this._comments.clear()

      const response = await CommentsService.commentsById(id)
      this.setComments(response.data.items)

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        this.setError(err.message)
      }

    } finally {
      this.setLoading(false)
    }
  }
}