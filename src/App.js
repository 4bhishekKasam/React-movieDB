import React, { Component } from 'react';
//import icons from './icons.png';
import './App.css';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';

const API_KEY = "195fcc5f3716ef506231a4bf2059fc62";

class App extends Component {
  constructor() {
    super()
    this.state = { movie: '', movieList: [], totalResult:'' };
    this.onGetMovie = this.onGetMovie.bind(this);
  }

  componentWillMount() {
    console.log("*************");
  }

  onGetMovie(data) {
    this.setState({ movie: data });
    fetch('https://api.themoviedb.org/3/search/movie?query=' + data + '&api_key=' + API_KEY)
      .then(res => res.json())
      .then(movieList => {
        console.log(movieList.results[0])
        this.setState({ movieList: movieList.results });   
  
      })
    console.log("--------");
  }

  render() {
    return (
      <div className="App">
        <header className="container-fluid">
          {/* <img src={icons} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">
            Movies<span className="secondary">DB</span>
          </h1>
          {/* <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> */}
          <button type="button" className="info" data-toggle="modal" data-target="#myModal">
            i
          </button>
        </header>

        <SearchBar handleToParent={this.onGetMovie} />
        <p>Search Key :<b> {this.state.movie}</b></p>
        <MoviesList movieList={this.state.movieList}/>
        <footer className="footer">
          <p>Handcrafted by <b>Abhishek Konnur</b> | v1.0 </p>
        </footer>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">MovieDB</h4>
              </div>
              <div className="modal-body">
                <p> <b>The Movie Database</b> (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
                <p> Designed & Developed by <b>Abhishek Konnur</b> </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
