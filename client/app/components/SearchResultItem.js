import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchResultItem extends Component {
    render() {
      return (
        <div className="searched-item">
          <div>
            <a href={this.props.link}>{this.props.title}</a>
            <div>{this.props.link}</div>
          </div>
          <div>
            <img src={this.props.pagemap.cse_thumbnail[0].src} />
            {this.props.snippet}
          </div>
        </div>
      )
    }
}

SearchResultItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  src: PropTypes.string,
  snippet: PropTypes.string
}

export default SearchResultItem;
