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
      location: '',
      formatted: '', 
      latitude: 47.6062095, 
      longitude: -122.3320708,
      weather: [],
      events: [],
      movies: [],
      yelp: []
    };
  }

  handleLocation = (result) => {
    this.setState( { location: result.search_query, formatted: result.formatted_query } );
    console.log('in app', result);
    this.setState({latitude: result.latitude});
    this.setState({longitude: result.longitude})
    this.handleAPICalls();
  }

  handleAPICalls = async () => {
    let weatherData = await this.getResource('weather'); //.then(results => console.log('in weather returned', results));//this.setState( { weather: results.body }));
    let movieData = await this.getResource('movies');//this.setState( { movies: results.body }));
    let yelpData = await this.getResource('yelp'); //this.setState( { yelp: results.body }));
    let eventData = await this.getResource('events');//this.setState( { events: results.body }));
    this.setState( { weather: weatherData} );
    this.setState( { movies: movieData} );
    this.setState( { events: eventData} );
    this.setState( { yelp: yelpData} );


  }

  getResource = async (resource) => {
    console.log('in get event api call ', this.state.location);
    let data = await superagent.get(`${SERVER}/${resource}`)
    .query( { data: { search_query: this.state.location, formatted_query: this.state.formatted, latitude: this.state.latitude, longitude: this.state.longitude } })
    .then( results => {
      console.log('in', resource, results);
      //this.setState( { this.state.resource: results.body });
      return results.body;
    });
    //this.setState( { state.resource : data });
    return data;
  }

  render() {
    return (
      <React.Fragment>
        <Header titlePrompt="City Explorer" headerPrompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"/>
        <SearchForm handleLocation={this.handleLocation} prompt="Search for a location" buttonPrompt="Explore!" />
        <Map mapQuery={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}%2c%20${this.state.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} mapAlt={this.state.location} />
        <SearchResults weather= {this.state.weather} events={this.state.events} movies={this.state.movies} yelp={this.state.yelp} />
      </React.Fragment>
    );
  }
}

export default App;
