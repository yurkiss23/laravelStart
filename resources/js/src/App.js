import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/auth/Register';
import NavHeader from './components/Header/NavHeader';

import 'bootstrap/dist/css/bootstrap.css';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavHeader />
                <div className="container">
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/register">
                        <Register />
                    </Route>

                    <Route exact path="/login">
                        <Home />
                    </Route>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
