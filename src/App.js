import React from 'react';
import SearchBar from './components/searchBar/searchBar';
import Result from './components/userCard/result';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Result></Result>
      <Footer></Footer>
    </div>
  );
}

export default App;
