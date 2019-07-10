import React from 'react';

import Bradley from './components/Bradley/Bradley'
import Navi from './components/Navi/Navi'
import {Row, Col, Jumbotron, Nav} from 'react-bootstrap'

import './App.scss';

function App() {
  return (
    <div>
      <Navi/>
      <Jumbotron className = "jumbotron">
        <Row> 
          <Col>
          <Bradley/>
          </Col>
          <Col>
          Hi, I'm, Bradley
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default App;
