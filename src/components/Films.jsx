import React, { Component } from 'react';
import 'isomorphic-fetch';  // Using Chrome 69 but importing for best practices
import 'es6-promise';      // Using Chrome 69 but importing for best practices
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
                                <h5>Directed by: {film.director}</h5>
                                <h5>Produced by: {film.producer}</h5>
                                <p className="card-text">{film.description}</p>
                                <div className="card-footer">
                                    <small className="text-muted">Released in {film.release_date} with a Rotten Tomatoes Rating of {film.rt_score}/100</small>
                                    <a href={"http://www.google.com/search?q=" + film.title} className="btn btn-success">Check it out on Google.</a>
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