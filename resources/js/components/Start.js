import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrouserRouter, Route } from 'react-router-dom';
import RegisterPage from '../components/auth/Register';

export default class Start extends Component {
    render() {
        return (
            <div class="container">
                <div class="flex-center position-ref full-height">
                    <div class="content">
                        <div class="title m-b-md">
                            HomeWork
                        </div>

                        <div class="links">
                            <a href="../components/auth/Register"><RegisterPage/></a>
                            <a href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Start />, document.getElementById('app'));
}
