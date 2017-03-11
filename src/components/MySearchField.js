import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Search from 'grommet/components/Search';
import Select from 'grommet/components/Select';


@inject('groupsStore', 'uiStateStore') @observer
export default class MySearchField extends Component {

  constructor(props) {
    super(props);
    this.initialSelectValue = props.uiStateStore.groupName;
    this.state = {
      selectValue: this.initialSelectValue
    }
    this.selectField = null;
    this.groupIndex = -1;
    this.inputValue = '';
    this.newGroup = 'Create new group';
  }

  componentDidMount() {
    if (this.props.customType === 'select')
      this.selectField.inputRef.placeholder = 'Enter your group';
  }

  hangleChange = (event) => {
    const { value } = event.target;
    this.props.uiStateStore.changeGroupName(value);
    this.props.groupsStore.fetchGroups(value);
    this.inputValue = value;
  }

  suggestionList = (groups) => {
    if (groups.length === 0) return [this.newGroup];
    const groupsList = groups
      .map(item => item.group_full_name)
      .filter((item, index) => index < 7);
    groupsList.unshift('Create new group');
    return groupsList;
  }

  handleSelect = (object) => {
    const { router, uiStateStore } = this.props;
    if (this.props.customType === 'search') {
      if (object.suggestion === this.newGroup) {
        uiStateStore.changeAutorizeType(1);
        router.push('/login'); // NOTE: connect ui state and change to sign up
      } else {
        router.push(`/timetable/${object.suggestion}`);
      }
    } else {
      if (object.option === this.newGroup) {
        this.setState({
          selectValue: this.inputValue
        })
      } else {
        this.setState({
          selectValue: object.option
        })
      }
    }

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
    const { customType } = this.props;
    if (customType === 'search') {
      return (
        <Search placeHolder='Enter group name'
          className='browse-search-input'
          suggestions={this.suggestionList(groups)}
          inline={true}
          size='medium'
          onSelect={this.handleSelect}
          onKeyDown={this.onKeyDown}
          responsive={false}
          onDOMChange={this.hangleChange} />
      )
    } else if (customType === 'select') {
      return (
        <Select placeHolder='Find your group'
          ref={(item => this.selectField = item)}
          onSearch={this.hangleChange}
          options={this.suggestionList(groups)}
          value={this.state.selectValue}
          onChange={this.handleSelect} />
      )
    }
    return null;
  }

}
