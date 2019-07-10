import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import bb from "../../icons/bb-white-transparent.svg"

import "./Navi.scss"

export default class Navi extends Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark" expand="sm" fixed = "bottom">
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