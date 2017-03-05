import React from 'react';
import MDSpinner from 'react-md-spinner';
import '../styles/Timetable.sass';

function Timetable({isFetching, schedule}) {
  if (isFetching) {
    return (
      <div style={{width: '55px', margin: '100px auto 0 auto'}}>
        <MDSpinner
          size='55'
          singleColor='rgb(66, 165, 245)'/>
      </div>
    )
  }
  return (
    <h1>{schedule.group.group_full_name}</h1>
  );
}

export default Timetable;
