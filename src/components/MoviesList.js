import React, { Component } from 'react';
import './MoviesList.css';

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        const list = this.props.movieList.map((movie) => {
            const posterUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.backdrop_path;
            const infoUrl = "https://www.themoviedb.org/movie/" + movie.id;
            return (
                <div className="grid-container-div" key={movie.id}>
                    <div className="grid-item item1"> <b> {movie.title}</b></div>
                    <div className="grid-item item2">
                        <img src={posterUrl}
                            alt={movie.title}
                            className="imageBox" />
                    </div>
                   
                    <div className="grid-item item2">
                        <b>  Overview </b>  :
                         {movie.overview.length < 100 ? `${movie.overview}` : `${movie.overview.substring(0, 100)}...`} <br />
                        <b> Original Language</b> : {movie.original_language} <br />
                        <b> Rating</b> : {movie.vote_average}/10     <br />
                        <b> Release Date</b> :{movie.release_date}
                    </div>
                    <div className="grid-item item2">
                        <a className="btn btn-default" type="submit"
                            href={infoUrl}
                        >
                            View more
                    </a>
                    </div>
                </div>
            )
        })

        return (
            <div className="grid-container">
                {list}
            </div>
        );
    }
}

export default MoviesList;