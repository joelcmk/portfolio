import React, { Component } from 'react';
import './App.css';
import Home from "./Pages/Home";
import Header from './Header';
import Footer from './Footer';
import About from './Pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App;
