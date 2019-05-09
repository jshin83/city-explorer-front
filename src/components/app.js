import React from 'react';
import Header from './header.js/index.js';
import SearchResults from './search-results.js/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;
