import { observable, action, useStrict } from 'mobx';
useStrict(true);

class GroupsStore {
  @observable groups = [];
  @observable isFetching = false;

  @action fetchGroups(queryString) {
    if (queryString.length === 0) {
      this.groups.replace([]);
      return;
    }
    const link = `https://api.rozklad.org.ua/v2/groups/?search={'query':'${queryString}'}`;
    this.isFetching = true;
    fetch(link)
      .then(response => {
        if (response.status >= 400)
          throw new Error('group not found');
        return response.json()
      })
      .then(action((json) => {
        this.groups.replace(json.data);
        this.isFetching = false;
      }))
      .catch(action((error) => this.groups.replace([])))
  }
}

const groupsStore = new GroupsStore();
export default groupsStore;
