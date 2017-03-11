import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import MyLoginForm from './MyLoginForm';
import MySignupForm from './MySignupForm';

import '../styles/Login.sass';

@inject('uiStateStore', 'autorizeStore') @observer
export default class Login extends Component {

  componentDidMount() {
    if (this.props.autorizeStore.user.group) {
      this.props.router.push('/');
    }
  }

  changeTab = (tabNum) => {
    this.props.uiStateStore.changeAutorizeType(tabNum);
  }

  render() {
    const { autorizeType } = this.props.uiStateStore;
    return (
      <div className='authorisation-forms'>
        <Tabs activeIndex={autorizeType}
          onActive={this.changeTab}>
          <Tab title='LOGIN'>
            <MyLoginForm {...this.props}/>
          </Tab>
          <Tab title='SIGN UP'>
            <MySignupForm {...this.props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
