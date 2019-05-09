import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryData: ""
    }
  }
  handleInput = e => {
    this.setState( {queryData: e.target.value} );
  }

  handleSubmit = async e => {
    e.preventDefault();
    await superagent.get('https://calm-taiga-81023.herokuapp.com/location').query({ data: `${this.state.queryData}` }).then(result => this.props.handleLocation(result.body));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.prompt}<input onChange={this.handleInput}/>
        <button>{this.props.buttonPrompt}</button>
      </form>
    )
  }
}

export default SearchForm;