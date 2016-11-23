'use strict';
import _ from 'lodash';
import React, { Component } from 'react';
import MovieListHeader from './Header';
import MovieListItem from './ListItem';

export default class MovieList extends Component {
  renderMovies(){
    const props = _.omit(this.props, 'search');
    return _.map(this.props.movies, (movie, index) => <ListItem key={index} {...movie}{...props}/>);
  }
  render() {
    return (
      <table>
        <Header />
        <tbody>
        {this.renderMovies()}
        </tbody>
      </table>
    );
  }
}
