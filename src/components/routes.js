import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Mortgages from './mortgage';
import ContactUs from './contactus';
import LoginForm from './login';
import MortgageCalculatorPage from './mortgage-calculator';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={LoginForm}/>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/mortgages' component={Mortgages}/>
            <Route path='/contactus' component={ContactUs}/>
            <Route path='/mortgage-calculator' exact component={MortgageCalculatorPage}/>
        </Switch>
    )
};

export default Routes