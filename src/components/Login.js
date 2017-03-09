import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import MyLoginForm from './MyLoginForm';
import MySignupForm from './MySignupForm';

import '../styles/Login.sass';

@inject('autorizeStore') @observer
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.email = null;
    this.password = null;
  }

  changeTab = (tabNum) => {
    this.props.autorizeStore.changeAutorizeType(tabNum);
  }

  render() {
    const { autorizeType } = this.props.autorizeStore;
    return (
      <div className='authorisation-forms'>
        <Tabs activeIndex={autorizeType}
          onActive={this.changeTab}>
          <Tab title='LOGIN'>
            <MyLoginForm />
          </Tab>
          <Tab title='SIGN UP'>
            <MySignupForm />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
