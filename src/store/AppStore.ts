import { makeAutoObservable } from "mobx";

import UserStore from "./userStore/userStore";
import { IAppStore } from "./IAppStore";
import CommentsStore from "./commentsStore/CommentsStore";
import AwardsStore from "./awardsStore/AwardsStore";


class AppStore implements IAppStore {
  user = new UserStore();
  comments = new CommentsStore()
  awards = new AwardsStore()

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AppStore();
