import React from 'react';

import Bradley from './components/Bradley/Bradley'
import Navi from './components/Navi/Navi'
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
                        Hi, I'm Bradley
                    </Col>
                </Row>
        </div>
    );
}

export default App;
