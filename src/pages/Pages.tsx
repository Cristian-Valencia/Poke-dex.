import React from 'react' ;
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home/Home.container';
import About from './About/About.component';
import PokemonPage from './PokemonPage/PokemonPage.container';

// Qua va messo il Router

export default function pages() {
    return (
        <div>

            <Switch>

                <Route exact path='/'>

                    <Home />

                </Route>

                <Route exact path='/pokemonPage'>

                    <PokemonPage />

                </Route>

                <Route exact path='/about'>

                    <About />

                </Route>



            </Switch>

        </div>
    )
}
