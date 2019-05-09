import React from 'react';

class SearchResults extends React.Component {

  render() {
    return (
      <section>
        <Weather lat ={this.props.lat} long={this.props.long} />
        <Yelp lat={this.props.lat} long={this.props.long} />
        <Event lat={this.props.lat} long={this.props.long} />
        <MovieDB lat={this.props.lat} long={this.props.long} />
        <Trail lat={this.props.lat}long={this.props.long} />
      </section>
    );
  }
}

class Event extends React.Component {

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}
class MovieDB extends React.Component {

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class Weather extends React.Component {

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

class Trail extends React.Component {

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}
class Yelp extends React.Component {

  render() {
    return (
      <section>
        <ul>Hi.</ul>
      </section>
    );
  }
}

export default SearchResults;