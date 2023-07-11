import React from "react";
import { Link } from "react-router-dom";

//That component works exactly the same way as the other MoviesPage components, the only difference is the way it is displayed, and it also shows less elements. This one shows the latest popular films

let rates = "";
let date = "";
let dates = "";
let month = "";
let valor = true;

class MoviesPage3 extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-12-15&primary_release_date.lte=2023-01-22&sort_by=popularity.desc&api_key=e6877ba9a9e64cea66c4249dea5c9067"
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
      <div className="moviesDiv3">
        <a className="headerTitle">Our Selection</a>
        <ul className="list5">
          {this.state.movies.map((movie, idx) => (
            
            <li key={movie.id}>
              
              <div className="sublist3">
              {idx <= 4 ? (
                
                <Link className="list-item_3" to={`/movie/${movie.id}`}>
                  <div className="imageDiv">
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster"
                      className="movie-poster4"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                  </div>
                  <div className="textDiv">
                  <p className="movieTitle2">{movie.original_title}</p>
                  {(() => {
                    if (movie.vote_average === 10) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className="rating_childParent">
                          <p className="rating_childA">{rates}%</p>
                          <p className="rating_childB">of users recommend this film.</p>
                        </div>
                      )
                    } else if (movie.vote_average >= 7) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className="rating_childParent">
                          <p className="rating_childA">{rates}%</p>
                          <p className="rating_childB">of users recommend this film.</p>
                        </div>
                      )
                    } else if (movie.vote_average  >= 5) {
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className="rating_childParent">
                          <p className="rating_childA">{rates}%</p>
                          <p className="rating_childB">of users recommend this film.</p>
                        </div>                        
                      )
                    } else if (movie.vote_average  >= 2){
                      return (
                        rates = Math.round(movie.vote_average * 10),
                        <div className="rating_childParent">
                          <p className="rating_childA">{rates}%</p>
                          <p className="rating_childB">of users recommend this film.</p>
                        </div>
                      )
                    }
                    else  {
                      return (
                        rates = Math.round(movie.vote_average * 10),                        
                        <p className="rating_childA">No Rating <i class="fas fa-youtube-square    "></i></p>
                        
                      )
                    }
                  })()}
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster-image"
                      className="imgBg4"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                  </div>
                </Link>
                ) : (
                  valor = true
                )
              }
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage3;
