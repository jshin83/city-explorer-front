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
      latitude: 47.6062095, 
      longitude: -122.3320708
    };
  }

  handleLocation = (result) => {
    this.setState({location: result.search_query});
    console.log('in app', result);
    this.setState({latitude: result.latitude});
    this.setState({longitude: result.longitude})
  }

  render() {
    return (
      <React.Fragment>
        <Header titlePrompt="City Explorer" headerPrompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"/>
        <SearchForm handleLocation={this.handleLocation} prompt="Search for a location" buttonPrompt="Explore!" />
        <Map mapQuery={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}%2c%20${this.state.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} mapAlt={this.state.location} />
        <SearchResults lat={this.state.latitude} long={this.state.longitude} />
      </React.Fragment>
    );
  }
}

export default App;
