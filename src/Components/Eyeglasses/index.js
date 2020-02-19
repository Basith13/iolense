/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import Header from '../Header';



class Eyeglasses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // eslint-disable-next-line class-methods-use-this
    handleFailure() {
        const x = document.getElementById('toast-false');
        x.className = 'show';
        setTimeout(() => { x.className = x.className.replace('show', ''); }, 1000);
    }

    // eslint-disable-next-line class-methods-use-this
    handleSuccess() {
        const x = document.getElementById('toast-right');
        x.className = 'show';
        setTimeout(() => { x.className = x.className.replace('show', ''); }, 1000);
        document.getElementById('toast-right').style.backgroundColor = 'green';
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="gallery-content">

                    <div className="title">
                        <h3>Ethnic Bottoms Collections</h3>
                    </div>


                    <div className="gallery">
                        <img src="E1.jpeg"></img>
                        <img src="E2.jpeg"></img>
                        <img src="E3.jpeg"></img>
                        <img src="E4.jpeg"></img>
                        <img src="E5.jpeg"></img>
                        

                    </div>
                </div>
            </Fragment>





        );
    }
}

export default Eyeglasses;
