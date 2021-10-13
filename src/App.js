import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Read from './components/read';
import Create from './components/create';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//App Class Extending Component
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Switches for the Navbar */}
        <Switch>
          <Route path="/" exact><Content /></Route>
          <Route path = "/create"><Create></Create></Route>
          <Route path = "/read"><Read></Read></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
