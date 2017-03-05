import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BrowseGroups from '../components/BrowseGroups';
import * as RequestActions from '../actions/RequestActions';

class Browse extends Component {
  render() {
    return (
      <BrowseGroups {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups.groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
