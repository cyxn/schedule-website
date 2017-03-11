import { observable, action } from 'mobx';

class TimetableStore {
  @observable schedule = {};
  @observable dataReady = false;
  @observable notFound = false;

  @action fetchSchedule(group) {
    this.dataReady = false;
    this.notFound = false;
    const link = `https://api.rozklad.org.ua/v2/groups/${group}/timetable`;
    fetch(link)
      .then(response => {
        if (response.status >= 400)
          throw new Error('group not found');
        return response.json()
      })
      .then(action((json) => {
        this.schedule = json.data;
        this.dataReady = true;
      }))
      .catch(action((error) => {
        this.notFound = true;
        this.dataReady = true;
      }))
  }
}

const timetableStore = new TimetableStore();
export default timetableStore;
