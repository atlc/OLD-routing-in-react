import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Default from './Default';
import Films from './Films';
import FilmsID from './FilmsID';
import People from './People';
import PeopleID from './PeopleID';
import Locations from './Locations';
import LocationsID from './LocationsID';
import Vehicles from './Vehicles';
import VehiclesID from './VehiclesID';


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Home</button></Link>
                    <Link to="/films"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Films</button></Link>
                    <Link to="/people"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">People</button></Link>
                    <Link to="/locations"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Locations</button></Link>
                    <Link to="/vehicles"><button className="btn btn-dark ml-2 mr-2 mb-3 mt-3">Vehicles</button></Link>
                    <Switch>
                        <Route exact path="/" component={Default} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={FilmsID} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={PeopleID} />
                        <Route exact path="/locations" component={Locations} />
                        <Route exact path="/locations/:id" component={LocationsID} />
                        <Route exact path="/vehicles" component={Vehicles} />
                        <Route exact path="/vehicles/:id" component={VehiclesID} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;