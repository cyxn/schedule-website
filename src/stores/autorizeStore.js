import { observable, action } from 'mobx';

class AutorizeStore {
  @observable autorizeType = 0; // 0 = log in, 1 = registration -- for UI purposes

  @action changeAutorizeType(index) {
    this.autorizeType = index;
  }
}

const autorizeStore = new AutorizeStore();
export default autorizeStore;
