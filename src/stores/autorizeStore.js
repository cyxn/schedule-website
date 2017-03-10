import { observable, action } from 'mobx';
import Alert from 'react-s-alert';

import { fb_auth } from './firebaseStore';
import uiStateStore from './uiStateStore';

class AutorizeStore {
  @observable successLogin = false;
  @observable user = {};

  constructor() {
    fb_auth.onAuthStateChanged((user) => {
      console.log(user, 'onAuthStateChanged fired');
      if (user && user.displayName)
        this.saveUserInStore(user);
    })
  }

  createUser(email, password, group, router) {
    fb_auth.createUserWithEmailAndPassword(email, password)
    .then((info) => {
      console.log(info, 'info inside of createUserWithEmailAndPassword')
      fb_auth.currentUser.updateProfile({displayName: group})
      .then(() => this.saveUserInStore(fb_auth.currentUser))
      .then(() => this.signInSuccess(router))
    })
    .catch((error) => this.showAuthError(error));
  }

  @action saveUserInStore(userInfo) {
    this.user.email = userInfo.email;
    this.user.group = userInfo.displayName;
    this.user.emailVerifed = userInfo.emailVerified;
  }

  // FIXME: throw an error if something wrong to prevent data saving
  @action userSignIn(email, password, router) {
    this.successLogin = false;
    fb_auth.signInWithEmailAndPassword(email, password)
      .then(() => this.signInSuccess(router))
      .catch(error => this.showAuthError(error));
  }

  @action signInSuccess(router) {
    this.successLogin = true;
    console.log(uiStateStore, 'uiStateStore');
    uiStateStore.triggerLoading(false);
    Alert.success('Successfully logged in', {
      position: 'top-right',
      timeout: 3500,
      offset: 50,
      onShow: () => {
        router.push(`/timetable/${this.user.group}`)
      }
    })
  }

  @action showAuthError(error) {
    //NOTE: change error message, depends on error.code
    Alert.error(error.message, {
      position: 'top-right',
      timeout: 30000,
      offset: 50,
      onShow: function() {
        console.log(error, 'auth Error!')
      }
    })
  }
}

const autorizeStore = new AutorizeStore();
export default autorizeStore;
