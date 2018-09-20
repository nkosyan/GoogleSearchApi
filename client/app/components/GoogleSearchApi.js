import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import '../styles/tmp.scss'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
class GoogleSearchApi extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchResult: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    this.handleSearch(this.props.searchkeyword);
  }
  handleSearch(searchKeyword) {
      fetch('/search?q=' + searchKeyword, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }).then(res => res.json())
        .then(json => {
          console.log('json', json);
          this.setState({
            searchResult: json.items
          })
        });
  }
  render() {
    return <div className="main">
            <SearchBar onHandleSearch={this.handleSearch} searchkeyword={this.props.searchkeyword} />
            {this.state.searchResult !== undefined && this.state.searchResult.length > 0 && <SearchResult searchResult={this.state.searchResult} /> }
           </div>
  }
}

export default GoogleSearchApi;
