import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class PeopleID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(p => this.setState({ person: p }));
    }

    render() {
        return (
            <div key={this.state.person.id} className="card text-center">
                <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                <div className="card-body">
                    <h1 className="card-title">{this.state.person.name}</h1>
                    <hr />
                    <p><strong>Age:</strong> <em>{this.state.person.age}</em></p>
                    <p><strong>Gender:</strong> <em>{this.state.person.gender}</em></p>
                    <p><strong>Hair color:</strong> <em>{this.state.person.hair_color}</em></p>
                    <p><strong>Eye color:</strong> <em>{this.state.person.eye_color}</em></p>
                    <div className="card-footer">
                        <p>My ID: {this.state.person.id}</p>
                        <a href={this.state.person.url} target="_blank" className="btn btn-dark">See my full JSON from the Ghibli API here:</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleID;