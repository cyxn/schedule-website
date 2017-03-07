import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';
import { observer, inject } from 'mobx-react';

import Paragraph from 'grommet/components/Paragraph';

// import TimetableCard from './TimetableCard';
import '../styles/Timetable.sass';

@inject('timetableStore') @observer
export default class Timetable extends Component {
  componentDidMount() {
    this.props.timetableStore.fetchSchedule(this.props.params.group);
  }

  render() {
    const { dataReady, schedule, notFound } = this.props.timetableStore;
    if (!dataReady) {
      return (
        <div style={{width: '55px', margin: '100px auto 0 auto'}}>
          <MDSpinner
            size='55'
            singleColor='rgb(22, 147, 165)'/>
        </div>
      )
    } else if (notFound) {
      return (
        <div style={{width: '600px', margin: '100px auto 0 auto'}}>
          <Paragraph size='large'>
            Извините, расписание вашей группы не найдено :(
          </Paragraph>
        </div>
      )
    }
    return (
      <div className='timetable'>
        <h2>
          НТУУ "КПИ", {schedule.group.group_full_name}
        </h2>
      </div>
    )
  }
}
