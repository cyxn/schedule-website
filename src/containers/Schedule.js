import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Timetable from '../components/Timetable';
import * as RequestActions from '../actions/RequestActions';

class Schedule extends Component {
  componentDidMount() {
    this.props.RequestActions.fetchSchedule(this.props.params.group);
  }
  render() {
    return (
      <Timetable {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.schedule.schedule,
    dataReady: state.schedule.dataReady,
    notFound: state.schedule.notFound
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
