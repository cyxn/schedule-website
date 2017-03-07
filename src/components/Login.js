import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import LoginForm from 'grommet/components/LoginForm';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import '../styles/Login.sass';

@inject('todosStore', 'autorizeStore') @observer
export default class Login extends Component {
  changeTab = (tabNum) => {
    this.props.autorizeStore.changeAutorizeType(tabNum);
  }
  render() {
    //const { todos, json, add } = this.props.todosStore;
    const { autorizeType } = this.props.autorizeStore;
    return (
      <div className='authorisation-forms'>
        <Tabs activeIndex={autorizeType}
          onActive={this.changeTab}>
          <Tab title='Login'>
            <LoginForm onSubmit={obj => console.log(obj)}
              title='Enter your credits' />
          </Tab>
          <Tab title='Sign up'>
            <p>
              Second contents
            </p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
