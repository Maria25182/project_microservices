import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Clients from './components/clients/Clients.js'
import Sales from './components/sales/Sales.js'
import Invoice from './components/invoice/Invoice.js'
import Products from './components/products/Products.js'
import Home from './components/home/Home.js'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Clients' component={Clients} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/Sales' component={Sales} />
            <Route exact path='/Invoice' component={Invoice} />
        </Switch>

    );
}

export default Routes;