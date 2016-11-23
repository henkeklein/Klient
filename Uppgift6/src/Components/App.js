import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Request from 'superagent';
import _ from 'lodash';
var Button = require('react-button');

class App extends Component {
  constructor(){
  super();
  this.state = {};
}

  render() {
    var movies = _.map(this.state.movies, (movie) =>{
      return <li>{movie.Title}  {movie.Year} <img src={movie.Poster} height="30%" width="20%"/></li>;
    });
    return (
      <div>
      <h1>Welcome To My Mashup</h1>
      <Header />
      <input ref="query" onChange={ (e) => { this.search(); } } type="text" />
      <h4>
      <ul>{movies}
      <Button
        style={{borderWidth: 1, borderColor: 'blue'}}
        onClick={this.handlePress}>
        Press Me!
      </Button>
      </ul>
      </h4>
      </div>
    );
  }
  searchMovie(query){
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
    Request.get(url).then((response) =>{
      this.setState({
        movies: response.body.Search,
        total: response.body.totalResults
      });
    });
  }
  search(){
    this.searchMovie(this.refs.query.value);
  }

  handlePress(event) {
  alert('Pressed!');
  }
}

export default App;
