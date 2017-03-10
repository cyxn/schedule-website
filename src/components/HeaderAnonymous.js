import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import Box from 'grommet/components/Box';

function HeaderAnonymous(props) {
  const { autorizeStore } = props;
  const { changeAutorizeType } = autorizeStore;
  return (
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <Link to='/login'
        onClick={changeAutorizeType.bind(autorizeStore, 0)}
        className='header-link'>
        Login
      </Link>
      <span className='header-split'>|</span>
      <Link to='/login'
        onClick={changeAutorizeType.bind(autorizeStore, 1)}
        className='header-link'>
        Sign up
      </Link>
    </Box>
  )
}

export default observer(['autorizeStore'], HeaderAnonymous);
