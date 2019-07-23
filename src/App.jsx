import React, { Component} from 'react';

import Bradley from './components/Bradley/Bradley'
import Navi from './components/Navi/Navi'
import TypeWriter from './components/Typewriter'
import {Row, Col} from 'react-bootstrap'

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            welcomeMessage: "",
        }
    }

    componentDidMount = () => {
        this.welcomeMessage()
    }
    
    // Once we've waited a little, start typing
    welcomeMessage = () => {
        this.setState({
            welcomeMessage: "Hi, I'm Bradley",
        })
        setTimeout(this.welcomeMessage, 750)
    }

    render = () => {
        const { welcomeMessage } = this.state
        
        return (
            <div className = "page">
                <div className = "header">
                    <Navi/>
                    <Row className="content">
                        <Col xs="2" className= "logo">
                            <Bradley/>
                        </Col>
                        <Col xs="8" className = "welcome">
                            <TypeWriter
                                cursor = "_"
                                cursorOnEnd = { true } 
                                delay = { 200 }
                                id = "welcome"
                                message = { welcomeMessage ? welcomeMessage : ""}
                                speed = { 100 }
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;
