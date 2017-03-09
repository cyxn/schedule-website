import { observable, action } from 'mobx';
import Alert from 'react-s-alert';

import { fb_auth } from './firebaseStore';

class AutorizeStore {
  @observable autorizeType = 0;
  @observable successLogin = false;

  createUser(email, password) {
    fb_auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error, 'createUser error');
      this.showAuthError(error);
    });
  }

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
