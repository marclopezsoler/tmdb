import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

//This page is complementary to the Movie detail page, it works the same way, you get the id from the movie you previously clicked, then add that id to the link and then fetch
//It shows a group of movies similar to the film you clicked with the same style of the links fetched on the landing page

export default function MovieSimilar(props) {
  
  const {movieId} = useParams()
  
  const [list, setList] = useState([
    {
      poster_path: "",
      original_title: "",
      release_date: "",
      id: "",
      overview: "",
    }
  ]);
  
  let date = "";
  let dates = "";
  let month = "";
  let valor = true;
  let rates = "";
  const location = useLocation();
  const data = location.state;
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e6877ba9a9e64cea66c4249dea5c9067`)
    .then(response => response.json())
    .then(json => {
      setList([]);
      json.results.map((movie) => {
        setList((list) => [...list, {
          poster_path: movie.poster_path,
          original_title: movie.original_title,
          release_date: movie.release_date,
          id: movie.id,
          overview: movie.overview,
          vote_average: movie.vote_average,
        }
      ]);
    });
  }); 
}, [list]);

  return (
    <div className="moviesDiv">
        <a className="headerTitle">Similar to this film</a>
        <ul className="list">
          {list.map((movie) => (
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