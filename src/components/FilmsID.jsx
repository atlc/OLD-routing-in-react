import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class FilmsID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(f => this.setState({ film: f }));
    }

    render() {
        return (
            <div key={this.state.film.id} className="card text-center">
                <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                <div className="card-body">
                    <h2 className="card-title">{this.state.film.title}</h2>
                    <h5>Directed by: {this.state.film.director}</h5>
                    <h5>Produced by: {this.state.film.producer}</h5>
                    <p className="card-text">{this.state.film.description}</p>
                    <div className="card-footer">
                        <p className="text-muted">Released in {this.state.film.release_date} with a Rotten Tomatoes Rating of {this.state.film.rt_score}/100</p>
                        <p>Movie ID: {this.state.film.id}</p>
                        <hr />
                        <a href={"http://www.google.com/search?q=" + this.state.film.title} target="_blank" className="btn btn-dark">Check it out on Google.</a>
                        <hr />
                        <a href={this.state.film.url} target="_blank" className="btn btn-dark">My JSON on the Ghibli API</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmsID;