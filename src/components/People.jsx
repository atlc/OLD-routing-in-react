import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleList: []
        }
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ peopleList: people }));
    }

    render() {
        return (
            <div className="row">
                {this.state.peopleList.map(person => (
                    <div key={person.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                            <div className="card-body">
                                <h1 className="card-title">{person.name}</h1>
                                <hr />
                                <p><strong>Age:</strong> <em>{person.age}</em></p>
                                <p><strong>Gender:</strong> <em>{person.gender}</em></p>
                                <p><strong>Hair color:</strong> <em>{person.hair_color}</em></p>
                                <p><strong>Eye color:</strong> <em>{person.eye_color}</em></p>
                                <div className="card-footer">
                                    <p>My ID: {person.id}</p>
                                    <a href={"/people/" + person.id} className="btn btn-dark mb-2 mt-2">See just me:</a>
                                    <a href={person.url} target="_blank" className="btn btn-dark mb-2 mt-2">See my full JSON here:</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default People;