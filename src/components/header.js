import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.titlePrompt}</h1>
        <p>{this.props.headerPrompt}</p>
      </div>
    );
  }
}

export default Header;