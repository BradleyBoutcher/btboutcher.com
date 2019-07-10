import React from 'react';

import Bradley from './components/Bradley/Bradley'
import Navi from './components/Navi/Navi'
import {Row, Col, Jumbotron, Nav} from 'react-bootstrap'

import './App.scss';

function App() {
  return (
    <div>
      <Navi/>
        <Row className="content">
          <Col xs="4">
            <Bradley/>
          </Col>
          <Col xs="8" className = "welcome">
            Hi, I'm Bradley
          </Col>
        </Row>
    </div>
  );
}

export default App;
