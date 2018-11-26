import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.PureComponent  {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.searchkeyword != undefined ? this.props.searchkeyword  : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.keyPress = this.keyPress.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleClick() {
    this.props.onHandleSearch(this.state.value);
  }
  keyPress(e){
    if(e.keyCode == 13){
      this.props.onHandleSearch(e.target.value);
    }
  }
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return <div className="search-bar">
            <input type="search"
                  placeholder="search test test webhook test"
                  ref={(input) => { this.nameInput = input; }}
                  value={this.state.value}
                  onChange={this.handleChange}
                  onKeyDown={this.keyPress} />
            <button onClick={this.handleClick}>Search TEST</button>
          </div>
  }
}
SearchBar.propTypes = {
  onHandleSearch: PropTypes.func.isRequired
}

export default SearchBar;
