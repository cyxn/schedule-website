import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import LoginForm from 'grommet/components/LoginForm';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

@inject('autorizeStore') @observer
export default class MyLoginForm extends Component {

  loginSubmit = (credits) => {
    const { autorizeStore } = this.props
    const redirect = () => {
      this.props.router.push(`/timetable/${autorizeStore.user.group}`);
    }
    autorizeStore.userSignIn(credits.username, credits.password, redirect);
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}
