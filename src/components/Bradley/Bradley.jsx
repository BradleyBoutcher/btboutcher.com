import React, { Component } from 'react';
import './Bradley.scss'
  
export default class Bradley extends Component {
    render() {
        return (
            <div className = 'body-container' >
                <div className = 'body' style={{background: "grey"}}>
                    <div className = 'neck'/>
                    <div className = 'head'>
                        <div className = 'hair'>
                            <div className = 'hair-content'/>
                        </div>
                        <div className = 'ears'/>
                        <div className = 'eyes'/>
                        <div className = 'mouth'/>
                    </div> 
                </div>
            </div>
        )
    }
}