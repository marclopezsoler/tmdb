import React from "react";
import { Link } from "react-router-dom";

//This component also works the same as the other MoviesPage components, it shows upcoming movies, and has a background image to make it look different from the other components

let rates = "";
let date = "";
let dates = "";
let month = "";
let valor = true;

class MoviesPage4 extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-01-01&primary_release_date.lte=2023-02-28&sort_by=popularity.desc&api_key=e6877ba9a9e64cea66c4249dea5c9067"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movies: json.results,
        });
      });
  }

  render() {
    return (
      <div className="moviesDiv">
        <a className="headerTitle">Upcoming</a>
        <ul className="list3">
        <img className='imgBg2' src='/base.png'></img>
          {this.state.movies.map((movie, idx) => (
            <li key={movie.id}>
              <div className="sublist1">
                <Link className="list-item_1" to={`/movie/${movie.id}`}>
                  <div className="imageDiv">
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster"
                      className="movie-poster"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                  </div>
                  {(() => {
                    if (movie.vote_average === 10) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className='rating1'>
                          <p className="rating_child2">{rates}<sup>%</sup></p>
                        </div>
                      )
                    } else if (movie.vote_average >= 7) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className='rating1'>
                          <p className="rating_child">{rates}<sup>%</sup></p>
                        </div>
                      )
                    } else if (movie.vote_average  >= 5) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className='rating2'>
                          <p className="rating_child">{rates}<sup>%</sup></p>
                        </div>
                      )
                    } else if (movie.vote_average  >= 2){
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className='rating3'>
                          <p className="rating_child">{rates}<sup>%</sup></p>
                        </div>
                      )
                    }
                    else  {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className='rating4'>
                          <p className="rating_child2">N.R.</p>
                        </div>
                      )
                    }
                  })()}
                  <p className="movieTitle">{movie.original_title}</p>
                  {valor === true ? (
                    dates = new Date(movie.release_date),
                    month = dates.toLocaleString('en-US', { month: 'short' }),
                    date = movie.release_date,
                    date = date.split('-').map(e => e[0] == '0' ? e.slice(1) : e),
                    date = month + ' ' + date[2] + ', ' + date[0],
                    <p className="date">{date}</p>
                  ) : (
                    console.log(valor)
                  )
                  }
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage4;
