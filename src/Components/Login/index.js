/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './index.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                <label >UserName</label>
                    <input type="username" placeholder="Enter your UserName" name="username" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" name="password" />

                    

                    <button className="sign-btn"onClick={(e) => this.handleSubmit(e)}>Sign In </button>
                    <Link to="/Signup" className="link">Don't have Account</Link>
                    
                    

                </div>

            </div>

        );
    }
}

export default Login;
