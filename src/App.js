import React from 'react';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this. state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
