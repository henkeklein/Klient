import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Request from 'superagent';
import _ from 'lodash';
import Button from 'react-button';

class App extends Component {
  constructor(){
  super();
  this.state = {};
}

  render() {
    var children = [];
    var artist = _.map(this.state.artist, (nameArtist) =>{
      for (var i = 0; i< nameArtist.length; i++){
        children.push(
          <li key={i}>{nameArtist}</li>
        );
        return children;
      }
  });
    var movies = _.map(this.state.movies, (movie) =>{
      return <li>{movie.Title}  {movie.Year}  <img src={movie.Poster}/>
      <Button
        style={{background: 'green', color: 'black'}}
        onClick={this.artistOnClick}>
        See Spotify Album
      </Button>
      </li>
      });


    return (
      <div>
      <h1>Welcome To My Mashup</h1>
      <Header />
      <input ref="query" onChange={ (e) => { this.search(); this.searchSpotify(); } } type="text" />
      <div style={{flexDirection: 'column', display: 'flex', width: '30%', height: '50%'}}>
      <h4>
      <ul>{movies}
      </ul>
      <ul>{artist}
      </ul>
      </h4>
      </div>
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

  searchSpotify(){
    this.searchForArtist(this.refs.query.value);
  }

  searchForArtist(query) {
    Request.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`)
      .then((response) => {
        this.setState({
            artist: response.body.artists.items[0],
            id: response.body.artists.id

        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}


export default App;
