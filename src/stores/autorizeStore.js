import { observable, action } from 'mobx';
import Alert from 'react-s-alert';

import { fb_auth } from './firebaseStore';

class AutorizeStore {
  @observable autorizeType = 0;
  @observable successLogin = false;
  @observable user = {};

  constructor() {
    fb_auth.onAuthStateChanged((user) => {
      console.log(user, 'onAuthStateChanged fired');
      if (user.displayName)
        this.saveUserInStore(user);
    })
  }

  @action saveUserInStore(userInfo) {
    this.user.email = userInfo.email;
    this.user.group = userInfo.displayName;
    this.user.emailVerifed = userInfo.emailVerified;
  }

  createUser(email, password, group, redirect) {
    fb_auth.createUserWithEmailAndPassword(email, password)
      .then(() => fb_auth.currentUser.updateProfile({displayName: group}))
      .then(() => this.saveUserInStore(fb_auth.currentUser))
      .then(() => this.signInSuccess(redirect))
      .catch((error) => this.showAuthError(error));
  }

  // FIXME: throw an error if something wrong to prevent data saving
  @action userSignIn(email, password, redirect) {
    this.successLogin = false;
    fb_auth.signInWithEmailAndPassword(email, password)
      .then(() => this.signInSuccess(redirect))
      .catch(error => this.showAuthError(error));
  }

  @action changeAutorizeType(index) {
    this.autorizeType = index;
  }

  @action signInSuccess(redirect) {
    this.successLogin = true;
    Alert.success('Successfully logged in', {
      position: 'top-right',
      timeout: 3500,
      offset: 50,
      onShow: redirect()
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
