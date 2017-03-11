import React from 'react';
import { observer, inject } from 'mobx-react';

import UserExpertIcon from 'grommet/components/icons/base/UserExpert';
import ScheduleIcon from 'grommet/components/icons/base/Schedule';
import LogoutIcon from 'grommet/components/icons/base/Logout';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

function HeaderSignedIn(props) {
  const { user } = props.autorizeStore;
  return (
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <Menu responsive={true}
        className='header-menu'
        inline={true}
        direction='row'>
        <Button label='My schedule'
          icon={<ScheduleIcon />}
          onClick={() => console.log('My schedule clicked')}
          path={`/timetable/${user.group}`}
          className='header-menu-item'
          plain={true} />
        <Button label='Profile'
          icon={<UserExpertIcon />}
          path='/profile'
          className='header-menu-item'
          onClick={() => console.log('Profile clicked')}
          plain={true} />
        <Button label='Sign out'
          icon={<LogoutIcon />}
          className='header-menu-item'
          onClick={() => console.log('Sign out clicked')}
          plain={true} />
      </Menu>
    </Box>
  )
}

export default inject('autorizeStore')(observer(HeaderSignedIn));
