import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import GhibliLogo from '../logo.png';


class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmsList: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => this.setState({ filmsList: films }));
    }

    render() {
        return (
            <div className="row">
                {this.state.filmsList.map(film => (
                    <div key={film.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <img className="card-img-top" src={GhibliLogo} alt="Ghibli Studios logo" />
                            <div className="card-body">
                                <h2 className="card-title">{film.title}</h2>
                                <hr />
                                <h5>Directed by: {film.director}</h5>
                                <h5>Produced by: {film.producer}</h5>
                                <hr />
                                <p className="card-text">{film.description}</p>
                                <div className="card-footer">
                                    <p>Released in {film.release_date} with a Rotten Tomatoes Rating of {film.rt_score}/100</p>
                                    <p>Movie ID: {film.id}</p>
                                    <a href={"/films/" + film.id} className="btn btn-dark mb-2 mt-2">See only me!</a>
                                    <a href={"http://www.google.com/search?q=" + film.title} target="_blank" className="btn btn-dark mb-2 mt-2">Check it out on Google.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Films;