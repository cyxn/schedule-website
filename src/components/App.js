import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
        <DevTools />
      </div>
    )
  }
}

export default App;
