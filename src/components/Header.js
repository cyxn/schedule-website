import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import HeaderAnonymous from './HeaderAnonymous';
import HeaderSignedIn from './HeaderSignedIn';

import '../styles/Header.sass';

function AppBarHeader(props) {
  const { successLogin } = props.autorizeStore;

  return (
    <Header>
      <Link to='/' className='header-link header-title'>
        <Title>
          Schedule site
        </Title>
      </Link>
      {successLogin ? <HeaderSignedIn /> : <HeaderAnonymous />}
    </Header>
  );
}
export default inject('autorizeStore')(observer(AppBarHeader));
