import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
        <div className="mb-6 answer-class">
            <input className="block border-2 border-white-300 placeholder-white-400 rounded h-12 w-2/3 px-5 focus:border-green-900 m-auto" id={this.props.title} name={this.props.title} type="text" placeholder={this.props.placeholder}/>
        </div>
        )
    }
}

