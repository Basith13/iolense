import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import AnonymousRoute from './CustomRoute/AnonymousRoute';
import AuthenticatedRoute from './CustomRoute/Authenticated.Route';

import Store from '@/ReduxStore';
import HomeComponent from '@/Components/Home';
import LoginComponent from '@/Components/Login';
import SignupComponent from '@/Components/Signup';
import ContactlensesComponent from '@/Components/Signup';
import EyeglassesComponent from '@/Components/Eyeglasses';
import SunglassesComponent from '@/Components/Sunglasses';
import MenComponent from '@/Components/Men';
import WomenComponent from '@/Components/Women';
import KidsComponent from '@/Components/Kids';

import './app.scss';

const App = () => (
    <BrowserRouter>
        <Fragment>
            <AnonymousRoute exact path="/" authenticated={typeof authenticated !== 'undefined'} component={HomeComponent} />
           
            <AnonymousRoute path="/login" authenticated={typeof authenticated !== 'undefined'} component={LoginComponent} />
            <AnonymousRoute path="/signup" authenticated={typeof authenticated !== 'undefined'} component={SignupComponent} />
            <AnonymousRoute path="/contactlenses" authenticated={typeof authenticated !== 'undefined'} component={ContactlensesComponent} />
            <AnonymousRoute path="/eyeglasses" authenticated={typeof authenticated !== 'undefined'} component={EyeglassesComponent} />
            <AnonymousRoute path="/sunglasses" authenticated={typeof authenticated !== 'undefined'} component={SunglassesComponent} />
            
            <AnonymousRoute path="/men" authenticated={typeof authenticated !== 'undefined'} component={MenComponent} />
            <AnonymousRoute path="/women" authenticated={typeof authenticated !== 'undefined'} component={WomenComponent} />
            <AnonymousRoute path="/kids" authenticated={typeof authenticated !== 'undefined'} component={KidsComponent} />

        
        </Fragment>
    </BrowserRouter>
);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('app'));
