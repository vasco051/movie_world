import { ObservableMap } from "mobx";
import { IComment } from "../../models/movieModels";


export interface ICommentsStore{
  _comments: ObservableMap<number, IComment>
  _isLoading: boolean
  _isError: string


  get list(): readonly IComment[]
  get isLoading(): boolean
  get isError(): string

  setLoading(value: boolean): void
  setError(error: string): void
  setComments(comments: IComment[]): void


  fetchComments(id: string | number) :void
}