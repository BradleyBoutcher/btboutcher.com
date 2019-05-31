import React from 'react';
import Bradley from './components/Bradley/Bradley'
import {Row, Col, Jumbotron} from 'react-bootstrap'
import './App.scss';

function App() {
  return (
    <div>
      <Jumbotron className = "jumbotron">
        <Row> 
          <Col>
          <Bradley/>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default App;
