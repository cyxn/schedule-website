import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import BrowseAdditional from './BrowseAdditional';
import MySearchField from './MySearchField';
import '../styles/Browse.sass';

@inject('autorizeStore') @observer
export default class Browse extends Component {

  render() {
    const { successLogin } = this.props.autorizeStore
    return (
      <div className='browse-search'>
        <MySearchField customType='search' {...this.props}/>
        {!successLogin && <BrowseAdditional />}
      </div>
    )
  }
}
