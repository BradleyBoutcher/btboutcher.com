import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Typewriter Component for displaying text as if it was typed
 * Adjusted to work with react and props
 * 
 * Copyright Bradley Boutcher 2019
 */

export default class TypeWriter extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            text: "",   // message that is displayed
            a: [],      // characters to be printed
            i: 0,       // current index of 'a'
            _: true,    // visibility of cursor
        }  
    }

    componentWillMount() {
        const { message, } = this.props  

        // create our array 
        this.setState({
            a: message.split('')
        })
    }

    componentDidMount() {
        this.typewriter()
        this.toggleCursor()
    }

    // called each time the state updates, until finished
    typewriter = () => {
        const { text, a, i} = this.state  
        const { speed } = this.props
        
        if (i < a.length - 1) {
            var char = a[i]
            var cur = text + char
            
            this.setState({
                text: cur,
                i: i + 1,
            })

            setTimeout(this.typewriter, speed)
        }
    }

    // change visibility of cursor on and off
    toggleCursor = () => {
        const { cursorOnEnd, speed} = this.props
        const { _ } = this.state
        
        if (cursorOnEnd) {
            this.setState({
                _: !_
            })

            setTimeout(this.toggleCursor, speed*10)
        }
    }

    render () {
        
        return (
            <div className = "typed-message" id = {this.props.id}>
                {this.state.text} {this.state._ ? "_" : ""}
            </div>
        )
    }
}

TypeWriter.propTypes = {
    id: PropTypes.string,
    message: PropTypes.string,
    speed: PropTypes.number,
    cursorOnEnd: PropTypes.bool,
}