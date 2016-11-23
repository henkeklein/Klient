import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Welcome To My Mashup</h1>
      <Header />
      </div>
    );
  }

  searchMovie(title){
    this.setState({search: this.state.search});
  }
}

export default App;
