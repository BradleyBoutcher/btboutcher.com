import React from 'react';

import Bradley from './components/Bradley/Bradley'
import Navi from './components/Navi/Navi'
import TypeWriter from './components/Typewriter'
import {Row, Col} from 'react-bootstrap'

import './App.scss';

const s = {
    maxWidth: "1000px"
}

function App() {
    return (
        <div style={s}>
                <Navi/>
                <Row className="content">
                    <Col xs="2" className= "logo">
                        <Bradley/>
                    </Col>
                    <Col xs="8" className = "welcome">
                        <TypeWriter
                          id = "welcome"
                          message = "Hi, I'm Bradley."
                          speed = {50}
                          cursorOnEnd = {true}
                        />
                    </Col>
                </Row>
        </div>
    );
}

export default App;
