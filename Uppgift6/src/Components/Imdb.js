'use strict';
import React, { Component } from 'react';

export default class Imdb extends Component {
  render() {
    return (
      <div>
      <form onSubmit= {this.handleSearchMovie.bind(this)}>
      <input type="text" placeholder="Search By Title" ref="inputTitle"/>
      <button>Search</button>
      </form>
      </div>
    );
  }

  handleSearchMovie(event){
    //prevent the side to reload
    event.preventDefault();
    this.props.searchMovie (this.refs.inputTitle.value;
    this.refs.inputTitle.value = '';

  }
}
