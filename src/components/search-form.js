import React from 'react';

class SearchForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleLocation}>
        <input />Search for a location
        <button>Explore!</button>
      </form>
    )
  }
}

export default SearchForm;