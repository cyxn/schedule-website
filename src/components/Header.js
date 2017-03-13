import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import HeaderAnonymous from './HeaderAnonymous';
import HeaderSignedIn from './HeaderSignedIn';

import '../styles/Header.sass';

function AppBarHeader(props) {
  const { successLogin, storeLoaded } = props.autorizeStore;
  if (!storeLoaded) return null;
  return (
    <Header>
      <Link to='/' className='header-link header-title'>
        <Title>
          Schedule site
        </Title>
      </Link>
      {successLogin ? <HeaderSignedIn {...props}/> : <HeaderAnonymous />}
    </Header>
  );
}
export default inject('autorizeStore')(observer(AppBarHeader));
