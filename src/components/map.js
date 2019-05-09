import React from 'react';
class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.props.mapQuery} alt=""/>
      </React.Fragment>
    );
  }
}

export default Map;