import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Search from 'grommet/components/Search';
import Select from 'grommet/components/Select';


@inject('groupsStore') @observer
export default class MySearchField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: undefined
    }
    this.selectField = null;
    this.groupIndex = -1;
  }

  componentDidMount() {
    this.selectField.inputRef.placeholder = 'Enter your group';
  }

  hangleChange = (event) => {
    this.props.groupsStore.fetchGroups(event.target.value);
  }

  suggestionList = (groups) => {
    if (groups.length === 0) return [];
    return groups
        .map(item => item.group_full_name)
        .filter((item, index) => index < 8);
  }

  handleSelect = (object) => {
    if (this.props.customType === 'search') {
      this.props.router.push(`/timetable/${object.suggestion}`);
    } else {
      this.setState({
        selectValue: object.option
      })
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
