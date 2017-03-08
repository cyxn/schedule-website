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
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';

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
          <Tab title='LOGIN'>
            <Heading strong={false}
              align='center'
              margin='medium'>
              Enter your credits
            </Heading>
            <LoginForm
              forgotPassword={<Anchor href='#'
              label='Forgot password?'/>}
              className='login-form'
              onSubmit={this.loginSubmit} />
          </Tab>
          <Tab title='SIGN UP'>
            <Heading strong={false}
              align='center'
              margin='medium'>
              Create account
            </Heading>
            <Form
              className='signup-form'
              pad='medium'>
              <FormField label='Email'>
                <TextInput ref={item => this.email = item}/>
              </FormField>
              <FormField className='password-field' label='Password'>
                <TextInput ref={item => this.password = item} />
              </FormField>
              <Label style={{lineHeight: '65px'}}>
                Give us your group name:
              </Label>
              <MySearchField customType='select' {...this.props} />
              <Footer pad={{"vertical": "medium"}}>
                <Button className='button-signup grommetux-button--fill' label='Sign Up'
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
