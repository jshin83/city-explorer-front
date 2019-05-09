import React from 'react';
import Header from './header.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form.js';
import Map from './map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}, 
      latitude: 0, 
      longitude: 0
    };
  }

  handleLocation = (location, result) => {
    this.setState({location});
    console.log('in app', result);
    this.setState({latitude: result.latitude});
    this.setState({longitude: result.longitude})
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm handleLocation={this.handleLocation}/>
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;
