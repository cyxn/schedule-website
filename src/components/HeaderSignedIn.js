import React from 'react';
import { observer } from 'mobx-react';

import UserExpertIcon from 'grommet/components/icons/base/UserExpert';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

function HeaderSignedIn(props) {
  const { user } = props.autorizeStore;
  return (
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <Button icon={<UserExpertIcon />}
        label={user.email}
        plain={true}
        path={`/timetable/${user.group}`} />
    </Box>
  )
}

export default observer(['autorizeStore'], HeaderSignedIn);
