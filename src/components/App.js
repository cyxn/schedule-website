import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Loading from 'react-loading-bar';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-loading-bar/dist/index.css'

import Header from './Header';

@inject('uiStateStore') @observer
export default class App extends Component {
  render() {
    const { isLoading } = this.props.uiStateStore;
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
        <Alert stack={{limit: 3}} effect='scale'/>
          <Loading
            show={isLoading}
            color="red"
          />
      </div>
    )
  }
}
