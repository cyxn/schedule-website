import React from 'react';
import { Link } from 'react-router';
import Search from 'grommet/components/Search';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import SearchInput from 'grommet/components/SearchInput';

import '../styles/BrowseGroups.sass';

function BrowseGroups({groups, RequestActions, router}) {
  function hangleChange(event) {
    RequestActions.fetchGroups(event.target.value);
  }
  function suggestionList(groups) {
    if (groups.length === 0) return [];
    return groups.map(item => item.group_full_name);
  }
  function handleSelect(object, selected) {
    RequestActions.fetchSchedule(object.suggestion);
    router.push(`/timetable/${object.suggestion}`);
  }
  let groupIndex = -1;
  function onKeyDown(event) {
    switch (event.keyCode) {
      case 13:
        if (groups.length === 0) break;
        if (groupIndex === -1) groupIndex = 0;
        const suggestion = groups[groupIndex].group_full_name;
        RequestActions.fetchSchedule(suggestion);
        router.push(`/timetable/${suggestion}`);
        break;
      case 38:
        if (groupIndex > 0) --groupIndex;
        break;
      case 40:
        if (groupIndex !== groups.length - 1)
          ++groupIndex;
        break
    }
  }
  return (
    <div className='browse-search'>
      <Search placeHolder='Enter group name'
        className='browse-search-input'
        suggestions={suggestionList(groups)}
        inline={true}
        size='medium'
        onSelect={handleSelect}
        onKeyDown={onKeyDown}
        responsive={false}
        onDOMChange={hangleChange} />
      <Paragraph>
        or you can
      </Paragraph>
      <div className='browse-buttons'>
        <Button label='Log in'
          className='button-login'
          path='/login'/>
        <Button label='Sign up'
          className='button-signup'
          path='/login'
          primary={true}/>
      </div>
    </div>
  )
}

export default BrowseGroups;
