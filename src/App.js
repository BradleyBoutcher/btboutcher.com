import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './App.css';

var Style = {
  header: {
    margin: "15px"
  }
}

function App() {
  return (
      <Jumbotron style={Style.header}>
        <h1>Bradley Boutcher</h1>
      </Jumbotron>
  );
}

export default App;
