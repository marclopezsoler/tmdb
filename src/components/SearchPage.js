import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//It displays the results based on the search done on the SearchFormComponent, it shows a grid with all the movies that result from the fetch that have the searched word included.
//It uses hooks, and there's also a counter that tells you how many results there are, as the maximum amount that TMDB api lets you fetch at the same time is 20, you'd get a max number of 20 here.
//In case an image is not found, a default image is shown

export default function SearchPage(props) {
  
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });

  const [list, setList] = useState([
    {
      poster_path: "",
      original_title: "",
      release_date: "",
      id: "",
      overview: "",
    }
  ]);

  const [lengthI, setlengthI] = useState(0);
  
  let description = "";
  let date = "";
  let dates = "";
  let month = "";
  let valor = true;
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=e6877ba9a9e64cea66c4249dea5c9067&query=" + data + "&language=en-US&page=1&include_adult=false")
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
          }
          ]);
        });
        setlengthI(json.results.length);
      }); 
  }, [data]);

  return (
    <div>
      <div className="box">
        <div className="searchLeft">
          <div className="searchLeftChild1">
            <p>Search Results</p>
          </div>
          <div className="searchLeftChild2">
            {lengthI === 0 ? (
              <p className="searchOverview">There are no results matching '{data}'.</p>
            ) : (
              <p className="searchOverview">Showing a total of {lengthI} results based on '{data}'.</p>
            )
          }
            
          </div>
        </div>
        <ul className='listSearch'>
          {list.map((movie) => (
            <li key={movie.id}>
              <div className="sublistSearch">
                <Link className="list-item_search" to={`/movie/${movie.id}`}>
                  <div className="searchCol1">
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster-image"
                      className="movie-poster-search"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                  </div>
                  <div className="searchCol2">
                  <p className="searchTitle">{movie.original_title}</p>
                  {valor === true ? (
                    dates = new Date(movie.release_date),
                    month = dates.toLocaleString('en-US', { month: 'long' }),
                    date = movie.release_date,
                    date = date.split('-').map(e => e[0] === '0' ? e.slice(1) : e),
                    date = month + ' ' + date[2] + ', ' + date[0],
                    <p className="searchDate">{date}</p>
                  ) : (
                    console.log(valor)
                  )
                  }
                    {movie.overview.length > 200 ? (
                        description = movie.overview.substring(0, 200),
                        <p className="searchOverview">{description + '...'}</p>
                      ) : (
                        <p className="searchOverview">{movie.overview}</p>
                      )
                    }
                  </div>
                  <div className="searchCol3">
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster-image"
                      className="imgBg3"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}