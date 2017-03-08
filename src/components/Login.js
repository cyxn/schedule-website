import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import LoginForm from 'grommet/components/LoginForm';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';

import MySearchField from './MySearchField';

import '../styles/Login.sass';

@inject('autorizeStore') @observer
export default class Login extends Component {
  constructor() {
    super();
    this.email = null;
    this.password = null;
  }

  changeTab = (tabNum) => {
    this.props.autorizeStore.changeAutorizeType(tabNum);
  }

  loginSubmit = (credits) => {
    this.props.autorizeStore.userSignIn(credits.username, credits.password);
    // TODO: push router to schedule. some notification that logged successfully
  }

  signUpSubmit = (e) => {
    e.preventDefault();
    this.props.autorizeStore.createUser(this.email.componentRef.value, this.password.componentRef.value);
  }

  render() {
    const { autorizeType } = this.props.autorizeStore;
    return (
      <div className='authorisation-forms'>
        <Tabs activeIndex={autorizeType}
          onActive={this.changeTab}>
          <Tab title='Login'>
            <Heading strong={false}
              align='center'
              margin='medium'>
              Enter your credits
            </Heading>
            <LoginForm onSubmit={this.loginSubmit} />
          </Tab>
          <Tab title='Sign up'>
            <Form>
              <Heading strong={false}
                align='center'
                margin='medium'>
                Create your account
              </Heading>
              <FormField label='email'>
                <TextInput ref={(item => this.email = item)}/>
              </FormField>
              <FormField label='password'>
                <TextInput ref={(item => this.password = item)} />
              </FormField>
              <MySearchField customType='select' {...this.props} />
              <Footer pad={{"vertical": "medium"}}>
                <Button label='Sign Up'
                  primary={true}
                  onClick={this.signUpSubmit} />
              </Footer>
            </Form>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
