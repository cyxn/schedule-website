import React from 'react';
import { Link } from 'react-router';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import '../styles/Header.sass';

function AppBarHeader({...rest}) {
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
      <Link to='/login'className='header-link'>
        Login
      </Link>
      <span className='header-split'>|</span>
      <Link to='/login' className='header-link'>
        Sign up
      </Link>
      </Box>
    </Header>
  );
}

export default AppBarHeader;
