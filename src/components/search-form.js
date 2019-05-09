import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryData: ''
    }
  }
  handleInput = e => {
    //console.log(e);
    this.setState( {queryData: e.target.value} );

  }

  handleSubmit = async e => {
    e.preventDefault();
    let location = this.state.queryData;
    console.log(this.state.queryData);
    let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/location').query({ data: `${this.state.queryData}` }).then(result => this.props.handleLocation(this.state.queryData, result.body));
    //this.props.handleLocation(this.state.queryData, data);

    //let results = data.body.results;  
    // console.log('DATAAAAAA ', data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput}/>Search for a location
        <button>Explore!</button>
      </form>
    )
  }
}

export default SearchForm;