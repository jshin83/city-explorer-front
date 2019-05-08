import React from 'react';
import Result from './Result.js';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
        <input />Search for a location
        <button>Explore!</button>
      </React.Fragment>
    )
  }
}

class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <img src="" alt=""/>
      </React.Fragment>
    );
  }
}

export default Main;