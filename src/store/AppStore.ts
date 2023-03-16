import { makeAutoObservable } from "mobx";

import { IAppStore } from "./IAppStore";
import CommentsStore from "./commentsStore/CommentsStore";
import AwardsStore from "./awardsStore/AwardsStore";
import AuthStore from "./authStore/authStore";


class AppStore implements IAppStore {
  comments = new CommentsStore()
  awards = new AwardsStore()
  auth = new AuthStore()

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AppStore();
