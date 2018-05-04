import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.initialValue }
    }

    sum(delta) {
        this.setState({value: this.state.value + delta})
    }

    render() {
        return (
            <div>
                <h1>Class Component Counter</h1>
                <h2>{this.state.value}</h2>
                
                <button onClick={() => this.sum(-1)}>Decrease</button>
                <button onClick={() => this.sum(1)}>Increase</button>
            </div>
        )
    }
}