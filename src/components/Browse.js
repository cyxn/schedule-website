import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';

import MySearchField from './MySearchField';
import '../styles/Browse.sass';

@inject('autorizeStore') @observer
export default class Browse extends Component {

  render() {
    const { autorizeStore } = this.props;
    const { changeAutorizeType } = autorizeStore;
    return (
      <div className='browse-search'>
        <MySearchField customType='search' {...this.props}/>
        <Paragraph>
          or you can
        </Paragraph>
        <div className='browse-buttons'>
          <Button label='Log in'
            onClick={changeAutorizeType.bind(autorizeStore, 0)}
            className='button-login'
            path='/login'/>
          <Button label='Sign up'
            className='button-signup'
            onClick={changeAutorizeType.bind(autorizeStore, 1)}
            path='/login'
            primary={true}/>
        </div>
      </div>
    )
  }
}
