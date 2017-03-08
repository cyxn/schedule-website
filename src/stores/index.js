import groupsStore from './groupsStore';
import timetableStore from './timetableStore';
import autorizeStore from './autorizeStore';
import userAuthStore from './userAuthStore';

import { autorun } from 'mobx';


export {
  groupsStore,
  autorizeStore,
  userAuthStore,
  timetableStore
 };

autorun('TimetableStore', () => {
 console.log('---------------timetableStore---------------');
 console.log(timetableStore.schedule);
 console.log('dataReady: ' + timetableStore.dataReady);
 console.log('notFound: ' + timetableStore.notFound);
 console.log('---------------timetableStore---------------');
})
