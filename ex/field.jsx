import React, { Component } from 'react'

export default class FieldComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.initialValue }
        this.handleChanges = this.handleChanges.bind(this); // need to set the context of this to the class
    }

    handleChanges(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input onChange={this.handleChanges} value={this.state.value} type="text"/>
            </div>
        )
    }
}