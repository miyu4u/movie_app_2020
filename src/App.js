import React, { Component } from 'react'
import './app.css'
import { HashRouter, Route } from 'react-router-dom'
import { About } from './routes/about'
import { Home } from './routes/home'

export class App extends Component {


    render() {
        return (
            <HashRouter>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
            </HashRouter>
        )
    }
}