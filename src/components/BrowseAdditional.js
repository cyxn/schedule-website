import React from 'react';
import { observer, inject } from 'mobx-react';

import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';

function BrowseAdditional(props) {
  const { autorizeStore } = props;
  const { changeAutorizeType } = autorizeStore;
  return (
    <div>
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

export default observer(['autorizeStore'], BrowseAdditional);
