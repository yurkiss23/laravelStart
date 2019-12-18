import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="flex-center position-ref full-height">
                    <div class="content">
                        <form method="POST" action="/auth/register">
                            <div className="col-md-6">
                                Name
                                <input type="text" name="name" value="{{ old('name') }}"/>
                            </div>

                            <div>
                                Email
                                <input type="email" name="email" value="{{ old('email') }}"/>
                            </div>

                            <div>
                                Password
                                <input type="password" name="password"/>
                            </div>

                            <div class="col-md-6">
                                Confirm Password
                                <input type="password" name="password_confirmation"/>
                            </div>

                            <div>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

