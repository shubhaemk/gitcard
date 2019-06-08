import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import SearchBar from './components/searchBar/searchBar';
import Result from './components/userCard/result';
import Footer from './components/footer/footer';

class App extends Component {
  render(){
    return (
      <div className="hero is-fullheight" style={{ backgroundColor : (this.props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)') }}>
        <SearchBar></SearchBar>
        <Result></Result>
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