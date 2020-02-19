import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    handleChange(url) {
        this.props.history.push(`/${url}`);
    }

    render() {

        return (
            <div>
                <header>
                <div className="head">
                    <h6>IO LENSE</h6>
                    <div className="nav">

                    <div className="navBar">
                        <div class="dropdown">
                            <Link class="dropbtn" to=''>Eyeglasses</Link>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="men">MEN</a>
                                <a href="women">WOMEN</a>
                                <a href="Kids">Kids</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <Link class="dropbtn" to=''>Sunglasses</Link>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="Men">MEN</a>
                                <a href="Jeanspant">WOMEN</a>
                                <a href="Jeanspant">Kids</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <Link class="dropbtn" to=''>Contactlenses</Link>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="Men">MEN</a>
                                <a href="Jeanspant">WOMEN</a>
                                <a href="Jeanspant">Kids</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <Link class="dropbtn" to='Signup'>SignIn & SignUp</Link>
                          
                        </div>
                        <div class="dropdown">
                            <Link class="dropbtn" to=''>Wishlist</Link>
                            <div id="myDropdown" class="dropdown-content">
                                
                            </div>
                        </div>
                        <div class="dropdown">
                            <Link class="dropbtn" to=''>Cart</Link>
                            <div id="myDropdown" class="dropdown-content">
                                
                            </div>
                        </div>
                        
                        
                        </div>

                    
                   
                 
                    </div>

                </div>
                
                

</header>
            </div> 
        );
    }
}

export default Header;


