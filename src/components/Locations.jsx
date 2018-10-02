import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class Locations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationsList: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(response => response.json())
            .then(locations => this.setState({ locationsList: locations }));
    }

    render() {
        return (
            <div className="row">
                {this.state.locationsList.map(location => (
                    <div key={location.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                            <div className="card-body">
                                <h2 className="card-title">{location.name}</h2>
                                <hr />
                                <h5>Climate: {location.climate}</h5>
                                <h5>Terrain: {location.terrain}</h5>
                                <h5>Surface water percentage: {location.surface_water}</h5>
                                <hr />
                                <div className="card-footer">
                                    <p>My ID: {location.id}</p>
                                    <a href={"/locations/" + location.id} className="btn btn-dark mb-2 mt-2">See only me!</a>
                                    <a href={"https://www.google.com/search?safe=strict&hl=en&tbm=isch&q=" + location.name} target="_blank" className="btn btn-dark mb-2 mt-2">See what I look like!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Locations;