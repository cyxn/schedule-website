import { observable, computed, action } from 'mobx';
import { Fb } from '../firebase-store';
import { toJS } from 'mobx';

class TodosStore {
  @observable todos = {}

  constructor() {
    Fb.todos.on('value', action((snapshot) => {
      this.todos = snapshot.val();
    }));
  }

  @computed get json() {
    return toJS(this.todos);
  }
}

const todosStore = new TodosStore();
export default todosStore;
