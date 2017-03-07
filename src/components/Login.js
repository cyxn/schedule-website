import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todosStore') @observer
export default class Login extends Component {
  render() {
    const { todos, json, add } = this.props.todosStore;
    console.log(json);
    return (
      <h1>testfb</h1>
    )
  }
}
