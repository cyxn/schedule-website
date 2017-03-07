import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import '../styles/Header.sass';


function AppBarHeader(props) {
  const { changeAutorizeType } = props.autorizeStore;
  return (
    <Header>
      <Link to='/' className='header-link header-title'>
        <Title>
          Schedule site
        </Title>
      </Link>
      <Box flex={true}
        justify='end'
        direction='row'
        responsive={false}>
      <Link to='/login'
        onClick={changeAutorizeType.bind(props.autorizeStore, 0)}
        className='header-link'>
        Login
      </Link>
      <span className='header-split'>|</span>
      <Link to='/login'
        onClick={changeAutorizeType.bind(props.autorizeStore, 1)}
        className='header-link'>
        Sign up
      </Link>
      </Box>
    </Header>
  );
}
export default observer(['autorizeStore'], AppBarHeader);
