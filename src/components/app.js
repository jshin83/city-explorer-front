import React from 'react';
import Header from './header.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import superagent from 'superagent';
const SERVER = 'https://calm-taiga-81023.herokuapp.com';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "", 
      latitude: 47.6062095, 
      longitude: -122.3320708,
      weather: [],
      events: [],
      movies: [],
      yelp: []
    };
  }

  handleLocation = (result) => {
    this.setState({location: result.search_query});
    console.log('in app', result);
    this.setState({latitude: result.latitude});
    this.setState({longitude: result.longitude})
    this.handleAPICalls();
  }

  handleAPICalls = () => {
    this.getResource('weather');
    this.getResource('movies');
    this.getResource('yelp');
    this.getResource('trails');
    this.getResource('events');
  }

  getResource = async (resource) => {
    console.log('in get event api call ', this.state.location);
    await superagent.get(`${SERVER}/${resource}`)
    .query( { data: { location: this.state.location, latitude: this.state.latitude, longitude: this.state.longitude} })
    .then( results => {
      console.log('in EVENTS', results);
    });
  }

  getWeather = async () => {
    await superagent.get()
  }

  render() {
    return (
      <React.Fragment>
        <Header titlePrompt="City Explorer" headerPrompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"/>
        <SearchForm handleLocation={this.handleLocation} prompt="Search for a location" buttonPrompt="Explore!" />
        <Map mapQuery={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}%2c%20${this.state.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} mapAlt={this.state.location} />
        <SearchResults location= {this.state.location} lat={this.state.latitude} long={this.state.longitude} />
      </React.Fragment>
    );
  }
}

export default App;
