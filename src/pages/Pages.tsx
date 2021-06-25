import React from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home.component';
import About from './About/About.component';

// Qua va messo il Router

export default function pages() {
    return (
        <div>

            <Switch>

                <Route exact path='/'>

                    <Home />

                </Route>

                <Route exact path='/about'>

                    <About />

                </Route>



            </Switch>

        </div>
    )
}
