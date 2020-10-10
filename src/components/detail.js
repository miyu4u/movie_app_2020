import React, { Component } from 'react'



export class Detail extends Component {


    componentDidMount() {
        const { location, history } = this.props
        if (location.state === undefined) history.push('/')
    }

    render() {
        const { location } = this.props
        if (!location.state) return null;
        return (
            <span>{location.state.title}</span>
        )
    }
}