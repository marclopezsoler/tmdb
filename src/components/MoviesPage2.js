import React from "react";
import { Link } from "react-router-dom";

//That compoment works exactly the same way as the MoviesPage1, but it is filtered by genre, specifically dramas
//There's also a button that takes you to a genres page, with a state which is a number named from, that passes a prop to the Genres page, that button has a little animation when hover, to make it seem like a button or an interactive object

let rates = "";
let date = "";
let dates = "";
let month = "";
let valor = true;

class MoviesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=e6877ba9a9e64cea66c4249dea5c9067&page=2"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movies: json.results,
        });
      });
  }

  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    return (
      <div className="moviesDiv">
        
        <a className="headerTitle">Best Dramas <Link to="/genres/action" state={{ from: "28" }} className="genres">See all genres</Link></a>
        <ul className="list">
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

export default MoviesPage;
