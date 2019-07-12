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
            text: "",               // message that is displayed
            a: [],                  // characters to be printed
            i: 0,                   // current index of 'a'
            showCursor: false,      // visibility of cursor
        }  
    }

    componentWillMount() {
        const { message, } = this.props  

        // create our array of letters
        this.setState({
            a: message.length > 0 ? [] : message.split('')
        })
    }

    componentDidMount() {
        this.toggleCursor()
    }

    componentWillReceiveProps() {
        const { message, } = this.props  
        
        // create our array of letters again if new word passed in
        this.setState({
            a: message.length > 0 ? message.split('') : []
        })

        // kickoff typing with newly received words
        this.typewriter()
    }

    // called each time the state updates, until finished
    typewriter = () => {
        const { text, a, i} = this.state  
        const { speed } = this.props
        
        if (i < a.length ) {
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
        const { cursorOnEnd } = this.props
        const { showCursor } = this.state
        
        if (cursorOnEnd) {
            this.setState({
                showCursor: !showCursor
            })

            setTimeout(this.toggleCursor, 1000)
        }
    }

    render () {
        const { cursor } = this.props
        return (
            <div className = "typed-message" id = {this.props.id}>
                {this.state.text} {this.state.showCursor ? cursor : ""}
            </div>
        )
    }
}

TypeWriter.propTypes = {
    cursor: PropTypes.string,       // character to be used as cursor
    delay: PropTypes.number,        // holds off on typing until delay
    id: PropTypes.string,           // element id for easy custom styling
    message: PropTypes.string,      // message to display
    speed: PropTypes.number,        // speed of typing
    cursorOnEnd: PropTypes.bool,    // show cursor at end of line
}