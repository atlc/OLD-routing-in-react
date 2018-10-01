import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import FilmsID from './FilmsID';
import People from './People';
import PeopleID from './PeopleID';
import Default from './Default';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Home</button></Link>
                    <Link to="/films"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Films</button></Link>
                    <Link to="/people"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">People</button></Link>
                    <Switch>
                        <Route exact path="/" component={Default} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={FilmsID} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={PeopleID} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;