import React from 'react';
import superagent from 'superagent';
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <section>
        <Weather lat ={this.props.lat} long={this.props.long} />
        <Yelp lat={this.props.lat} long={this.props.long} />
        <Event location={this.props.location} />
        <MovieDB lat={this.props.lat} long={this.props.long} />
        <Trail lat={this.props.lat}long={this.props.long} />
      </section>
    );
  }
}

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
// `https://www.eventbriteapi.com/v3/events/search?location.longitude=${request.query.data.longitude}&location.latitude=${request.query.data.latitude}&expand=venue&token=${process.env.EVENTBRITE_API_KEY}`
    // let data = superagent.get('https://calm-taiga-81023.herokuapp.com/events')
    //   .query( { data: `${this.props.location}` })
    //   .then( results => {
    //     console.log('in EVENTS', results.body);
    //   });
      //   return results.body.reduce((list, event) => {
      //     list[event.name] = event.url;
      //     return list;
      //   }, {});
      // }).then( list => this.setState( {list}));

  }

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class MovieDB extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  //   let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/movies');
  //   let movies = data.body.results.reduce((list, movie) => {
  //     list[movie.name] = movie.url;
  //     return list;
  //   }, {});
  // }
  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class Weather extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     results: {}
  //   }

  //   let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/weather');
  //   let weathers = data.body.results.reduce((list, weather) => {
  //     list[weather.name] = weather.url;
  //     return list;
  //   }, {});
  // }
  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class Trail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  //   let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/trail');
  //   let trails = data.body.results.reduce((list, trail) => {
  //     list[trail.name] = trail.url;
  //     return list;
  //   }, {});
  // }

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class Yelp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  //   let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/yelp');
  //   let yelps = data.body.results.reduce((list, yelp) => {
  //     list[yelp.name] = yelp.url;
  //     return list;
  //   }, {});
  // }

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

export default SearchResults;