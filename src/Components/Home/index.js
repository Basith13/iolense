import React, { Component, Fragment } from 'react';
import Header from '../Header';
import './index.scss';

class Home extends Component {
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
            <Fragment>
                <Header />
                <div className="searchbox">
                    <button className="location-btn">location</button>
                <input type="text" name="fname" placeholder="What are you looking for?"></input>
                <button className="search-btn">Search</button>
                </div>
                <div className="showbox">
                    <div className="box-1">
                        <img src="women.jpg"></img>

                    </div>
                    <div className="box-2">
                    <img src="boy.jpg"></img>

                    </div>
                    <div className="box-3">
                    <img src="collection.jpg"></img>
                        
                    </div>
                    <div className="box-4">
                    <img src="1.jpg"></img>

                        
                    </div>
                    <div className="box-5">
                    <img src="2.jpg"></img>
                    </div>




                </div>
                <div className="showbox-1">
                    <div className="sbox-1">
                        <h2>Premium Glasses</h2>
                        <p>Ultra Light|| corrosion Free|| Best in Glass Material|| 1 year Warranty </p>
                        <button className="buy">BUY 1 GET FREE</button>
                    </div>
                    
                    <div className="sbox-2">
                        <div className="subox-1">
                            <img src="a.jpg"></img>
                            <h6>VINCENT CHASE VC</h6>
                            <p> SIZE MEDIUM | 3D VIEW</p>
                            <h5>INR 999/-</h5>
                            <div className="btn">
                            <button >VIEW DETAILS</button>
                            <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="subox-1">
                        <img src="b.jpg"></img>
                        <h6>VINCENT CHASE VC</h6>
                            <p> SIZE MEDIUM | 3D VIEW</p>
                            <h5>INR 999/-</h5>
                            <div className="btn">
                            <button >VIEW DETAILS</button>
                            <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="subox-1">
                        <img src="c.jpg"></img>
                        <h6>VINCENT CHASE VC</h6>
                            <p> SIZE MEDIUM | 3D VIEW</p>
                            <h5>INR 999/-</h5>
                            <div className="btn">
                            <button >VIEW DETAILS</button>
                            <button>ADD TO CART</button>
                            </div>
                        </div>

                        

                    </div>
                    
                </div>


               
            </Fragment>
        );
    }
}

export default Home;


