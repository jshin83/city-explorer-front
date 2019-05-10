import React from 'react';
import superagent from 'superagent';
class SearchResults extends React.Component {

  render() {
    return (
      <section>
        <Weather weather={this.props.weather} />
        <Yelp yelp={this.props.yelp} />
        <Event events={this.props.events} />
        <MovieDB movies={this.props.movies} />
        <Trail />
      </section>
    );
  }
}

class Event extends React.Component {
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

      // render() {
      //   const allWeather = this.props.darkSky.map((forecast, i) => {
      //     return (
      //         <
      //         key={i}
      //         forecast={forecast}
      //         />
      //     )
      //   })
      

    render() {
        console.log('event component', this.props.events);
    return (
      <ul>
        {Object.keys(this.props.events).map((key, idx, array) => {
          return (
            <li key={idx}>
              <a href={`${array[idx]['link']}`}>{key}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

class MovieDB extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movies: this.props.movies
  //   }
  // };

  //   let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/movies');
  //   let movies = data.body.results.reduce((list, movie) => {
  //     list[movie.name] = movie.url;
  //     return list;
  //   }, {});
  // }
  render() {
    let allMovies = [];
    if(this.props.movies) {
      allMovies = this.props.movies.map((movie, i) => {
        return (
          <li key={i}>{movie.title}</li>
        )
      })
    }
    return (
      <ul>
        {allMovies}
      </ul>
    )
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