import React, { Component } from 'react';
import MainRouter from './MainRouter';
import Header from './components/Header';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (
      <main id="page-wrap">
        <Header />
          <MainRouter />
        <Footer />
      </main>
    );
  }
}

export default App;