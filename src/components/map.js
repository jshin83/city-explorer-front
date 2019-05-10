import React from 'react';
class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.mapQuery} alt={this.props.mapAlt}/>
      </React.Fragment>
    );
  }
}

export default Map;