/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import Header from '../Header';


class Sarees extends Component {
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
                        <h3>Sarees Collections</h3>
                    </div>


                    <div className="gallery">
                        <img src="SE1.jpeg"></img>
                        <img src="SE2.jpeg"></img>
                        <img src="SE3.jpeg"></img>
                        <img src="SE4.jpeg"></img>
                        <img src="SE5.jpeg"></img>
                        <img src="SE6.jpeg"></img>
                        <img src="SE7.jpeg"></img>
                        <img src="SE8.jpeg"></img>
                        <img src="SE9.jpeg"></img>
                        <img src="SE10.jpeg"></img>
                        <img src="SE3.jpeg"></img>
                        <img src="SE4.jpeg"></img>
                        <img src="SE5.jpeg"></img>


                    </div>
                </div>
            </Fragment>





        );
    }
}

export default Sarees;
