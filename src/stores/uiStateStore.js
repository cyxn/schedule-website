import { observable, action } from 'mobx';

class UiStateStore {
  @observable autorizeType = 0;
  @observable isLoading = false;
  @observable groupName = '';

  @action changeAutorizeType(index) {
    this.autorizeType = index;
  }

  @action triggerLoading(bool) {
    this.isLoading = bool;
  }

  @action changeGroupName(value) {
    this.groupName = value;
  }

}

const uiStateStore = new UiStateStore();
export default uiStateStore;
