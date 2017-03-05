import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timetable from '../components/Timetable';
import * as RequestActions from '../actions/RequestActions';

class Schedule extends Component {
  render() {
    return (
      <Timetable {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.schedule.schedule,
    isFetching: state.schedule.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
