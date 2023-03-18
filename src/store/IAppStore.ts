import { IAuthStore } from "./authStore/IAuthStore";
import { IAwardsStore } from "./awardsStore/IAwardsStore";
import { ICommentsStore } from "./commentsStore/ICommentsStore";
import { IMoviesStore } from "./moviesStore/IMoviesStore";


export interface IAppStore {
  commentsStore: ICommentsStore;
  awardsStore: IAwardsStore;
  authStore: IAuthStore;
  moviesStore: IMoviesStore;
}
