import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import './App.css';

import SearchBar from './components/searchBar/searchBar';
import Welcome from './components/userCard/welcome';
import Footer from './components/footer/footer';

class App extends Component {
  render(){
    return (
      <div className="hero font is-fullheight" style={{ overflow : 'hidden', width : '100vw', backgroundColor : (this.props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)') }}>
        <SearchBar></SearchBar>
        <Welcome></Welcome>
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      theme : state.theme
  }
}
export default connect(mapStateToProps)(App);