import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class VehiclesID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(v => this.setState({ vehicle: v }));
    }

    render() {
        return (
            <div key={this.state.vehicle.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card text-center">
                    <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                    <div className="card-body">
                        <h2 className="card-title">{this.state.vehicle.name}</h2>
                        <hr />
                        <h5>Classification: {this.state.vehicle.type}</h5>
                        <h5>Length: {this.state.vehicle.length}</h5>
                        <hr />
                        <p>Description: {this.state.vehicle.description}</p>
                        <div className="card-footer">
                            <p>My ID: {this.state.vehicle.id}</p>
                            <a href={"https://www.google.com/search?safe=strict&hl=en&tbm=isch&q=Ghibli%20" + this.state.vehicle.name} target="_blank" className="btn btn-dark mb-2 mt-2">See what I look like!</a>
                            <a href={this.state.vehicle.url} target="_blank" className="btn btn-dark">My JSON on the Ghibli API</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VehiclesID;