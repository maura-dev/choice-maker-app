import React, { Component } from 'react'

export class DarkButton extends Component {
    render() {
        return (
            <button className="flex px-5 py-3 border border-green-900 hover:text-green-900 rounded shadow cursor-pointer bg-green-900 text-white-100 hover:bg-white-100" onClick={this.props.handleClick}>
                {this.props.icon}&nbsp; {this.props.text}
            </button>
        )
    }
}

export class LightButton extends Component {
    render() {
        return (
            <button className="flex px-5 py-3 border border-green-900 text-green-900 rounded shadow cursor-pointer hover:bg-green-900 hover:text-white-100" onClick={this.props.handleClick}>
               {this.props.icon}&nbsp; {this.props.text}
            </button>
        )
    }
}
