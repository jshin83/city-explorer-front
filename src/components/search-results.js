import React from 'react';
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
  render() {
    let allEvents = [];
    if(this.props.events) {
      allEvents = this.props.events.map((event, i) => {
        return (
          <ul key={i}>
            <li>{event.name}, {event.event_date}</li>
            <li><a href={event.link}>{event.name}</a></li>
            <li>{event.summary}</li>
          </ul>
        )
      })
    }
    return (
      <div>
        <h2>Events</h2>
        {allEvents}
      </div>
    )
  }
}

class MovieDB extends React.Component {
  render() {
    let allMovies;
    if(this.props.movies) {
      allMovies = this.props.movies.map((movie, i) => {
        return (
          <ul key={i}>
            <li><img src={movie.image_url} alt={movie.title}/></li>
            <li>Movie Title: {movie.title}</li>
            <li>{movie.overview}</li>
          </ul>
        )
      })
    }

    return (
      <div>
        <h2>Movies</h2>
        {allMovies}
      </div>
    )
  }
}

class Weather extends React.Component {
  render() {
    let allWeather = [];
    if(this.props.weather) {
      allWeather = this.props.weather.map((day, i) => {
        return (
          <ul key={i}>
            <li>{day.time}</li>
            <li>{day.forecast}</li>
          </ul>
        )
      })
    }
    return (
      <div>
        <h2>Weather</h2>
        {allWeather}
      </div>
    )
  }
}

class Trail extends React.Component {
  render() {
    return (
      <div>
        <h2>Trails</h2>
      </div>
    );
  }
}

class Yelp extends React.Component {
  render() {
    let allYelp = [];
    if(this.props.yelp) {
      allYelp = this.props.yelp.map((business, i) => {
        return (
          <ul key={i}>
            <li>{business.name}, {business.price}</li>
            <li>Rating: {business.rating}</li>
            <li><img src={business.image_url} alt={business.name} /></li>
          </ul>
        )
      })
    }

    return (
      <div>
        <h2>Yelp</h2>
        {allYelp}
      </div>
    )
  }
}

export default SearchResults;