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
      longitude: 0,
        
      // mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=" + `${this.latitude}` + "%2c%20$" + `${this.longitude}` + "&zoom=13&size=600x300&maptype=roadmap&key=" + `${process.env.GEOCODE_API_KEY}`
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
        <Header />
        <SearchForm handleLocation={this.handleLocation}/>
        <Map mapQuery={"https://maps.googleapis.com/maps/api/staticmap?center=" + `${this.state.latitude}` + "%2c%20" + `${this.state.longitude}` + "&zoom=13&size=600x300&maptype=roadmap&key=" + `${process.env.REACT_APP_GEOCODE_API_KEY}`}/>
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;
