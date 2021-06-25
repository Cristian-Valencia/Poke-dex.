import React from 'react' ;
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home/Home.container';
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
