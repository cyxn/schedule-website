import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups
  }
}

// function mapDispatchToProps(state) {
//
// }

export default connect(mapStateToProps)(App)
