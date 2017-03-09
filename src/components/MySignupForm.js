import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';
import Status from 'grommet/components/icons/Status';

import MySearchField from './MySearchField';


@inject('autorizeStore') @observer
export default class MySignupForm extends Component {

  constructor(props) {
    super(props);
    this.email = null;
    this.password = null;
  }

  signUpSubmit = (e) => {
    e.preventDefault();
    this.props.autorizeStore.createUser(this.email.componentRef.value, this.password.componentRef.value);
  }

  render() {
    return (
      <div>
        <Heading strong={false}
          align='center'
          margin='medium'>
          Create account
        </Heading>
        <Form
          className='signup-form'
          pad='medium'>
          <FormField label='Email'>
            <TextInput ref={item => {
              this.email = item;
              if (this.email) {
                this.email.componentRef.type = 'email';
                this.email.componentRef.required = true;
                this.email.componentRef.className = 'grommetux-text-input grommetux-input signup_form-email';
              }
            }}/>
            <Status className='status-email-ok' value='ok' />
          </FormField>
          <FormField className='password-field' label='Password'>
            <TextInput ref={item => {
              this.password = item;
              if (this.password) {
                this.password.componentRef.type = 'password';
                this.password.componentRef.required = true;
                this.password.componentRef.pattern = '.{6,}';
                this.password.componentRef.className = 'grommetux-text-input grommetux-input signup_form-pass';
                this.password.componentRef.placeholder = 'Minimum 6 characters';
              }
            }} />
            <Status className='status-pass-ok' value='ok' />
          </FormField>
          <Label style={{lineHeight: '65px'}}>
            Give us your group name:
          </Label>
          <MySearchField customType='select' {...this.props} />
          <Footer pad={{"vertical": "medium"}}>
            <Button className='grommetux-button--fill' label='Sign Up'
              primary={true}
              onClick={this.signUpSubmit} />
          </Footer>
        </Form>
      </div>
    )
  }
}
