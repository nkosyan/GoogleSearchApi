import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem';

class SearchResult extends Component {
  render() {
    return <div>test
            {this.props.searchResult.map(item =>
                <SearchResultItem key={item.link} {...item} />)}
           </div>
  }
}
SearchResult.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.object)
}

export default SearchResult;
