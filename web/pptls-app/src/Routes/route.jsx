import React from 'react';

import { BrowserRouter as Router, Redirect, Switch, Route, useHistory } from 'react-router-dom';
import Play from '../Components/Play/Play';
import DosJugadores from '../Components/Play/dosJugadores';
import Rules from '../Components/Rules/rules';
import App from '../App';
import notFound from'../Static/pageNotFound.png'
export default function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/Play">
                <Play />
            </Route>
            <Route exact path="/DosJugadores">
                <DosJugadores />
            </Route>
            <Route exact path="/Rules">
                <Rules />
            </Route>
            <Route component={NoMatchPage} />
        </Switch>

        </Router>
    );
}

const NoMatchPage = () => {
    let history = useHistory();
    function iraHome() {
        history.push("/");
    }
    return (
        <div className="App">

            <div className="pageNotFound">
                <h1 className="pageNotFoundtxt"> 404 Page not found  </h1>
            <div>
                <button className="btnNotFound" type="button" onClick={iraHome}>Back to Home</button>
            </div>
                <img class="img-responsive" src={notFound} className="imgnotfound" alt="Responsive image"/>
               

            </div>

        </div>
    );
};