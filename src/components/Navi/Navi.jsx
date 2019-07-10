import React, { Component } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap'
import bb from "../../icons/bb-white-transparent.svg"

import "./Navi.scss"

export default class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
    }

    render () {
        return (
            <Navbar bg="dark" variant="dark" expand="sm" fixed = "bottom" onToggle={this.toggleActive}>
                <Navbar.Brand href="#home">
                    <img
                    id="logo"
                    src={bb}
                    width="30"
                    height="30"
                    alt="bb"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="toggle"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#link">Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}