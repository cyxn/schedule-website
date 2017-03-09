import React, { Component } from 'react';
import Header from './Header';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
        <Alert stack={{limit: 3}} effect='scale'/>
      </div>
    )
  }
}

export default App;
