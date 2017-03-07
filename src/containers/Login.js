import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import BrowseGroups from '../components/BrowseGroups';
import * as RequestActions from '../actions/RequestActions';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';


@firebaseConnect([
  '/'
])
@connect( mapStateToProps, mapDispatchToProps )
export default class Login extends Component {
  render() {
    return (
      <h1>test firebase</h1>
    );
  }
}

function mapStateToProps(state, { firebase }) {
  return {
    groups: state.groups.groups,
    todos: dataToJS(firebase, 'todos')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}
