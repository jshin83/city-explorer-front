import React from 'react';

class Result extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Weather lat ={this.props.lat} long={this.props.long} />
        <Yelp lat={this.props.lat} long={this.props.long} />
        <Event lat={this.props.lat} long={this.props.long} />
        <MovieDB lat={this.props.lat} long={this.props.long} />
        <Trail lat={this.props/lat}long={this.props.long} />
      </React.Fragment>
    );
  }
}

export default Result;