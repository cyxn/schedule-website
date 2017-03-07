import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Search from 'grommet/components/Search';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';

import '../styles/Browse.sass';

@inject('groupsStore') @observer
export default class Browse extends Component {

  constructor() {
    super();
    this.groupIndex = -1;
  }

  hangleChange = (event) => {
    this.props.groupsStore.fetchGroups(event.target.value);
  }

  suggestionList = (groups) => {
    if (groups.length === 0) return [];
    return groups.map(item => item.group_full_name);
  }

  handleSelect = (object) => {
    this.props.router.push(`/timetable/${object.suggestion}`);
  }

  onKeyDown = (event) => {
    switch (event.keyCode) {
      case 13:
        if (this.props.groupsStore.groups.length === 0) break;
        if (this.groupIndex === -1) this.groupIndex = 0;
        const suggestion = this.props.groupsStore.groups[this.groupIndex].group_full_name;
        this.props.router.push(`/timetable/${suggestion}`);
        break;
      case 38:
        if (this.groupIndex > 0) --this.groupIndex;
        break;
      case 40:
        if (this.groupIndex !== this.props.groupsStore.groups.length - 1)
          ++this.groupIndex;
        break;
      default:
        break;
    }
  }

  render() {
    const { groups } = this.props.groupsStore;
    return (
      <div className='browse-search'>
        <Search placeHolder='Enter group name'
          className='browse-search-input'
          suggestions={this.suggestionList(groups)}
          inline={true}
          size='medium'
          onSelect={this.handleSelect}
          onKeyDown={this.onKeyDown}
          responsive={false}
          onDOMChange={this.hangleChange} />
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
}
