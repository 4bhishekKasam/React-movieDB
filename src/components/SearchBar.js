import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = { inputField: "" };
        this.getMovies = this.getMovies.bind(this);
        this.onSubmitMovie = this.onSubmitMovie.bind(this);
    }

    onSubmitMovie(e) {
        e.preventDefault();
        this.props.handleToParent(this.state.inputField);
        console.log(this.state.inputField);
        this.setState({ inputField: '' });
    }

    getMovies(e) {
        this.setState({ inputField: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitMovie} >
                    <div className="form-group">

                        <input type="text"
                            className="form-control"
                            value={this.state.inputField}
                            id="movie"
                            onChange={this.getMovies}
                            placeholder="Enter Movie... " />
                        <br />

                        <button className="btn btn-default" type="submit">
                            Submit <i className="fa fa-search"></i></button>
                    </div>

                </form>

            </div>
        );
    }
}

export default SearchBar;