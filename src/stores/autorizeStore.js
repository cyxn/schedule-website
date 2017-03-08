import { observable, action } from 'mobx';
import { fb_auth } from './firebaseStore';

class AutorizeStore {
  @observable autorizeType = 0; // 0 = log in, 1 = registration -- for UI purposes

  createUser(email, password) {
    fb_auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  userSignIn(email, password) {
    fb_auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  @action changeAutorizeType(index) {
    this.autorizeType = index;
  }
}

const autorizeStore = new AutorizeStore();
export default autorizeStore;
