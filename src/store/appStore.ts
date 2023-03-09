import { makeAutoObservable } from "mobx";

import UserStore from "./userStore/userStore";
import { IAppStore } from "./IAppStore";


class AppStore implements IAppStore {
  user = new UserStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AppStore();
