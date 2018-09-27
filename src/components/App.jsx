import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Films from './Films';
import Page2 from './Page2';
import Default from './Default';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-success ml-2 mr-2 mb-3 mt-3">Home</button></Link>
                    <Link to="/films"><button className="btn btn-success ml-2 mr-2 mb-3 mt-3">Films</button></Link>
                    <Link to="/page-2"><button className="btn btn-success ml-2 mr-2 mb-3 mt-3">Page 2</button></Link>
                    <Switch>
                        <Route exact path="/" component={Default} />
                        <Route exact path="/films" component={Films} />
                        <Route path="/page-2" component={Page2} />                        
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;