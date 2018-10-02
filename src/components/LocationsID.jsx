import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class LocationsID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(l => this.setState({ location: l }));
    }

    render() {
        return (
            <div key={this.state.location.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card text-center">
                    <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                    <div className="card-body">
                        <h2 className="card-title">{this.state.location.name}</h2>
                        <hr />
                        <h5>Climate: {this.state.location.climate}</h5>
                        <h5>Terrain: {this.state.location.terrain}</h5>
                        <h5>Surface water percentage: {this.state.location.surface_water}</h5>
                        <hr />
                        <div className="card-footer">
                            <p>My ID: {this.state.location.id}</p>
                            <a href={"https://www.google.com/search?safe=strict&hl=en&tbm=isch&q=" + this.state.location.name} target="_blank" className="btn btn-dark mb-2 mt-2">See what I look like!</a>
                            <a href={this.state.location.url} target="_blank" className="btn btn-dark">My JSON on the Ghibli API</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationsID;