import { observable, action } from 'mobx';
import { fb_auth } from './firebaseStore';

class UserAuthStore {
  @observable user = {};

  constructor() {
    fb_auth.onAuthStateChanged((user) => {
      console.log(user, 'onAuthStateChanged fired');
      // call for action to mutate this.user
    })
  }

  //some action
}

const userAuthStore = new UserAuthStore();
export default userAuthStore;
