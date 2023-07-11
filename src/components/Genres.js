import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//A prop us passed rather from the MoviesPage2, which is named "from" or passed from the same Genres page, and has the same name
//That prop is a number which corresponds to the genre number of the films, that way you can filter by genre
//The number is added into the link and then fetched
//An if tells you which genre is currently showing
//A grid of 10 films is shown at first, with a button that can show you 10 more films, up to a total of 20, and later hide these 10 films

export default function Genres(props) {

  const [list, setList] = useState([
    {
      poster_path: "",
      original_title: "",
      release_date: "",
      id: "",
      overview: "",
    }
  ]);
  
  const [load, setLoad] = useState(9);

  let description = "";
  let date = "";
  let dates = "";
  let month = "";
  let rates = "";
  let valor = true;
  const location = useLocation()
  const { from } = location.state

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/discover/movie?with_genres=${from}&primary_release_year=2014&api_key=e6877ba9a9e64cea66c4249dea5c9067`)
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
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
  }, [from]);

  function handleSubmit(e) {
    e.preventDefault();
    if(load==9){
      document.getElementById("submit").innerHTML = "Show less";
      var elem = document.getElementById("more");
      elem.className = "less";
      setLoad(19);
    }
    else{
      document.getElementById("submit").innerHTML = "Load more";
      var elem = document.getElementById("more");
      elem.className = "more";
      setLoad(9);
    }
    
  }

  return (
      <div className="genreParent">
        <div className="searchLeft2 top">
        <div className="searchLeftChild1">
        {(() => {
            if (from === "28") {
              return (
                <a>Best of action</a>
              );
            } else if (from === "12") {
              return (
                <a>Best of adventure</a>
              );
            } else if (from === "16") {
              return (
                <a>Best of animation</a>
              );
            } else if (from === "35") {
              return (
                <a>Best of comedy</a>
              );
            } else if (from === "80") {
              return (
                <a>Best of crime</a>
              );
            } else if (from === "99") {
              return (
                <a>Best of documentary</a>
              );
            } else if (from === "18") {
              return (
                <a>Best of dramas</a>
              );
            } else if (from === "10751") {
              return (
                <a>Best of family</a>
              );
            } else if (from === "14") {
              return (
                <a>Best of fantasy</a>
              );
            } else if (from === "36") {
              return (
                <a>Best of history</a>
              );
            } else if (from === "27") {
              return (
                <a>Best of horror</a>
              );
            } else if (from === "10402") {
              return (
                <a>Best of music</a>
              );
            } else if (from === "9648") {
              return (
                <a>Best of mystery</a>
              );
            } else if (from === "10749") {
              return (
                <a>Best of romance</a>
              );
            } else if (from === "878") {
              return (
                <a>Best of science fiction</a>
              );
            } else if (from === "10770") {
              return (
                <a>Best of TV Movies</a>
              );
            } else if (from === "53") {
              return (
                <a>Best of thriller</a>
              );
            } else if (from === "10752") {
              return (
                <a>Best of war</a>
              );
            } else {
              return (
                <a>Best of western</a>
              );
            }
          })()}
            
          </div>
          <div className="searchLeftChild3">
            <p><Link to="/genres/action" state={{ from: "28" }} className="headerTitle1">ACTION</Link></p>
            <p><Link to="/genres/adventure" state={{ from: "12" }} className="headerTitle1">ADVENTURE</Link></p>
            <p><Link to="/genres/animation" state={{ from: "16" }} className="headerTitle1">ANIMATION</Link></p>
            <p><Link to="/genres/comedy" state={{ from: "35" }} className="headerTitle1">COMEDIES</Link></p>
            <p><Link to="/genres/crime" state={{ from: "80" }} className="headerTitle1">CRIME</Link></p>
            <p><Link to="/genres/documentary" state={{ from: "99" }} className="headerTitle1">DOCUMENTARIES</Link></p>
            <p><Link to="/genres/drama" state={{ from: "18" }} className="headerTitle1">DRAMA</Link></p>
            <p><Link to="/genres/family" state={{ from: "10751" }} className="headerTitle1">FAMILY</Link></p>
            <p><Link to="/genres/fantasy" state={{ from: "14" }} className="headerTitle1">FANTASY</Link></p>
            <p><Link to="/genres/history" state={{ from: "36" }} className="headerTitle1">HISTORY</Link></p>
            <p><Link to="/genres/horror" state={{ from: "27" }} className="headerTitle1">HORROR</Link></p>
            <p><Link to="/genres/music" state={{ from: "10402" }} className="headerTitle1">MUSIC</Link></p>
            <p><Link to="/genres/mystery" state={{ from: "9648" }} className="headerTitle1">MYSTERY</Link></p>
            <p><Link to="/genres/romance" state={{ from: "10749" }} className="headerTitle1">ROMANCE</Link></p>
            <p><Link to="/genres/science-fiction" state={{ from: "878" }} className="headerTitle1">SCIENCE FICTION</Link></p>
            <p><Link to="/genres/tv-movies" state={{ from: "10770" }} className="headerTitle1">TV MOVIES</Link></p>
            <p><Link to="/genres/thriller" state={{ from: "53" }} className="headerTitle1">THRILLERS</Link></p>
            <p><Link to="/genres/war" state={{ from: "10752" }} className="headerTitle1">WAR</Link></p>
            <p><Link to="/genres/western" state={{ from: "37" }} className="headerTitle1">WESTERN</Link></p>
          </div>
        </div>
        <div className="moviesDiv1">
        <ul className='list4 top'>
          {list.map((movie, idx) => (
            <li key={movie.id}>
            <div className="sublist1">
            {idx <= load ? (
              <Link className="list-item_1" to={`/movie/${movie.id}`}>
                <div className="imageDiv">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt="poster"
                    className="movie-poster"
                    onError={(event) => {
                      event.target.src = "/default.jpg";
                      event.onerror = null;
                    }}
                  ></img>
                </div>
                {(() => {
                  if (movie.vote_average === 10) {
                    return (
                      (rates = Math.round(movie.vote_average * 10)),
                      (
                        <div className="rating1">
                          <p className="rating_child2">
                            {rates}
                            <sup>%</sup>
                          </p>
                        </div>
                      )
                    );
                  } else if (movie.vote_average >= 7) {
                    return (
                      (rates = Math.round(movie.vote_average * 10)),
                      (
                        <div className="rating1">
                          <p className="rating_child">
                            {rates}
                            <sup>%</sup>
                          </p>
                        </div>
                      )
                    );
                  } else if (movie.vote_average >= 5) {
                    return (
                      (rates = Math.round(movie.vote_average * 10)),
                      (
                        <div className="rating2">
                          <p className="rating_child">
                            {rates}
                            <sup>%</sup>
                          </p>
                        </div>
                      )
                    );
                  } else if (movie.vote_average >= 2) {
                    return (
                      (rates = Math.round(movie.vote_average * 10)),
                      (
                        <div className="rating3">
                          <p className="rating_child">
                            {rates}
                            <sup>%</sup>
                          </p>
                        </div>
                      )
                    );
                  } else {
                    return (
                      (rates = Math.round(movie.vote_average * 10)),
                      (
                        <div className="rating4">
                          <p className="rating_child2">N.R.</p>
                        </div>
                      )
                    );
                  }
                })()}
                <p className="movieTitle">{movie.original_title}</p>
                {valor === true
                  ? ((dates = new Date(movie.release_date)),
                    (month = dates.toLocaleString("en-US", {
                      month: "short",
                    })),
                    (date = movie.release_date),
                    (date = date
                      .split("-")
                      .map((e) => (e[0] == "0" ? e.slice(1) : e))),
                    (date = month + " " + date[2] + ", " + date[0]),
                    (<p className="date">{date}</p>))
                  : console.log(valor)}
              </Link>
              ) : (
                valor = true
              )
            }
            </div>
          </li>
          ))}
        </ul>
          <form className="more" id="more" onSubmit={handleSubmit}>
            <button type="submit" id="submit">Load more</button>
          </form>
        </div>
      </div>
  );
}