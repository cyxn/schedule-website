import groupsStore from './groupsStore';
import timetableStore from './timetableStore';
import autorizeStore from './autorizeStore';
import uiStateStore from './uiStateStore';

import { autorun } from 'mobx';


export {
  groupsStore,
  autorizeStore,
  timetableStore,
  uiStateStore
 };

autorun('TimetableStore', () => {
  console.group('TimetableStore');
    console.log(timetableStore.schedule);
    console.log('dataReady: ' + timetableStore.dataReady);
    console.log('notFound: ' + timetableStore.notFound);
  console.groupEnd();
})
