import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'

import App from './components/App'
import TV from './components/TV'
import Show from './components/Show'
import Home from './components/Home'
import ShowIndex from './components/ShowIndex'

// import './assets/style.css'

function handleEnter() {
    console.log('进入')
}

function handleLeave() {
    console.log('离开')
}

ReactDom.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex}></IndexRoute>
                <Route path="/shows/:id" component={Show}
                    onEnter={handleEnter}
                    onLeave={handleLeave}
                ></Route>
                <Redirect from="shows/:id" to="/shows/:id"></Redirect>
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))