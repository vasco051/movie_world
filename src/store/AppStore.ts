import { makeAutoObservable } from "mobx";
import AuthStore from "./authStore/authStore";
import AwardsStore from "./awardsStore/AwardsStore";
import CommentsStore from "./commentsStore/CommentsStore";

import { IAppStore } from "./IAppStore";
import { MoviesStore } from "./moviesStore/moviesStore";


class AppStore implements IAppStore {
  commentsStore = new CommentsStore();
  awardsStore = new AwardsStore();
  authStore = new AuthStore();
  moviesStore = new MoviesStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AppStore();
