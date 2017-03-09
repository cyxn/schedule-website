import { observable, action } from 'mobx';
import Alert from 'react-s-alert';

import { fb_auth } from './firebaseStore';

class AutorizeStore {
  @observable autorizeType = 0; // 0 = log in, 1 = registration -- for UI purposes FIXME: go local state with it
  @observable successLogin = false;

  createUser(email, password) {
    fb_auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error, 'createUser error');
      console.log(this);
      this.signInError(error);
    });
  }

  @action userSignIn(email, password, redirect) {
    this.successLogin = false;
    fb_auth.signInWithEmailAndPassword(email, password)
    .then(() => this.signInSuccess(redirect))
    .catch(error => this.signInError(error));
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

  @action signInError(error) {
    //NOTE: change error message, depends on error.code
    Alert.error(error.message, {
      position: 'top-right',
      timeout: 30000,
      offset: 50,
      onShow: function() {
        console.log(error, 'signInError')
      }
    })
  }
}

const autorizeStore = new AutorizeStore();
export default autorizeStore;
