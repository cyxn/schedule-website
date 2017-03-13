import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import BrowseAdditional from './BrowseAdditional';
import MySearchField from './MySearchField';
import '../styles/Browse.sass';

@inject('autorizeStore') @observer
export default class Browse extends Component {

  render() {
    const { successLogin, storeLoaded } = this.props.autorizeStore;
    if (!storeLoaded) return null;
    return (
      <div className='browse-search'>
        <MySearchField customType='search' {...this.props}/>
        {!successLogin && <BrowseAdditional />}
      </div>
    )
  }
}
