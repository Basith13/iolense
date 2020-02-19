/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


import './index.scss';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
     handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="container-signup">
                
                <div className="card1">
                    
                    
                </div>
                <div className="card2">

                    <label >FirstName</label>
                    <input type="firstname" placeholder="Enter your FirstName" name="username" />
                    <label >LastName</label>
                    <input type="lastname" placeholder="Enter your LastName" name="lastname" />
                    <label >MobileNumber</label>
                    <input type="mobilenumber" placeholder="Enter your mobilenumber " name="mobilenumber" />
                    <label >Email</label>
                    <input type="email" placeholder="Enter your email " name="email" />
                    <label>CreatePassword</label>
                    <input type="password" placeholder="create your password" name="password" />
                    <label>ConfirmPassword</label>
                    <input type="password" placeholder="confirm your password" name="password" />






                    <button className="sign-btn"onClick={(e) => this.handleSubmit(e)}>Sign UP </button> 
                    {/* <Link to="/" className="sign-btn">Sign UP </Link>

 */}


                </div>

            </div>

        );
    }
}

export default Signup;
