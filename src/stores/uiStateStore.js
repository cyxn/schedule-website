import { observable, action } from 'mobx';

class UiStateStore {
  @observable autorizeType = 0;
  @observable isLoading = false;

  @action changeAutorizeType(index) {
    this.autorizeType = index;
  }

  @action triggerLoading(bool) {
    this.isLoading = bool;
  }

}

const uiStateStore = new UiStateStore();
export default uiStateStore;
