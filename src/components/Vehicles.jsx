import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class Vehicles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehiclesList: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
            .then(response => response.json())
            .then(vehicles => this.setState({ vehiclesList: vehicles }));
    }

    render() {
        return (
            <div className="row">
                {this.state.vehiclesList.map(vehicle => (
                    <div key={vehicle.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                            <div className="card-body">
                                <h2 className="card-title">{vehicle.name}</h2>
                                <hr />
                                <h5>Classification: {vehicle.type}</h5>
                                <h5>Length: {vehicle.length}</h5>
                                <hr />
                                <p>Description: {vehicle.description}</p>
                                <div className="card-footer">
                                    <p>My ID: {vehicle.id}</p>
                                    <a href={"/vehicles/" + vehicle.id} className="btn btn-dark mb-2 mt-2">See only me!</a>
                                    <a href={"https://www.google.com/search?safe=strict&hl=en&tbm=isch&q=" + vehicle.name} target="_blank" className="btn btn-dark mb-2 mt-2">See what I look like!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Vehicles;