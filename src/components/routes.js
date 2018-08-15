import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Mortgages from './mortgage';
import ContactUs from './contactus';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/mortgages' component={Mortgages}/>
            <Route path='/contactus' component={ContactUs}/>
        </Switch>
    )
};

export default Routes