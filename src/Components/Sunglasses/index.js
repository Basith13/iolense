/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import Header from '../Header';




class Sandals extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Header />
            
            <div className="gallery-content">
                <div className="title">
                    <h3>Footware Collections</h3>
                </div>
                <div className="gallery">
                    <img src="b1.jpg"></img>
                    <img src="b2.jpg"></img>
                    <img src="b3.jpg"></img>
                    <img src="b4.jpg"></img>
                    <img src="b6.jpeg"></img>
                    <img src="b7.jpeg"></img>
                    <img src="b8.jpeg"></img>
                    <img src="b9.jpeg"></img>
                    <img src="b10.jpeg"></img>
                    <img src="b11.jpeg"></img>
                    <img src="b12.jpeg"></img>
                    <img src="b13.jpeg"></img>
                    <img src="b14.jpeg"></img>
                    <img src="b15.jpeg"></img>
                    <img src="b16.jpeg"></img>
                    <img src="b17.jpeg"></img>
                    <img src="b7.jpeg"></img>
                    <img src="b8.jpeg"></img>




                </div>
            </div>
            </Fragment>
        );
    }
}

export default Sandals;
