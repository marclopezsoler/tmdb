import React from 'react'
import { useParams } from 'react-router-dom'

//Page to show each movie in detail
//You get a prop with hooks with the useParams which is the id of the film you have previously clicked, this id is added to the link an then fetched
//There is also a scroll to top function to make sure you are shown the top of the screen when you enter
//The date is formatted and shown different than it is shown on the original fetch
//There's an if to detect wether there's a rating or not and another one to detect if there's an overview or not

const Movie = () => {

    const {movieId} = useParams()

    const [movie, setMovie] = React.useState([])
    
    let date = "2021-12-10";
    let year = "";
    let valor = true;

    React.useEffect(() => {
        getData()
    }, [movieId])

    const getData = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e6877ba9a9e64cea66c4249dea5c9067`)
        const myMovie = await data.json()
        setMovie(myMovie)

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
    }

    return (
      <div className='allDetail'>
        <img className='imgBg' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} onerror="this.src=default.jpg"></img>
        <ul className="list-detail">
            <li>
              <div className="detail">
                <div className='column1'>
                  <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt="poster"
                      className="movie-poster-detail"
                      onError={event => {
                        event.target.src = "/default.jpg"
                        event.onerror = null
                      }}
                    ></img>
                </div>
                <div className='column2'>        
                  <div className='both'>
                    <p className='title'>{movie.title}</p>
                    {valor === true ? (
                        date = new Date(movie.release_date),
                        year = date.getFullYear(),
                        <p className="year">{"(" + year + ")"}</p>
                      ) : (
                        console.log(valor)
                      )
                    }
                  </div>
                  {movie.vote_average > 0 ? (
                    movie.vote_average = (Math.round(movie.vote_average * 100) / 100).toFixed(1),
                    <div>
                      <h1 className="overviewTitle2">{movie.vote_average}</h1>
                      <p className="overviewTitle1"> Average User Score</p>
                    </div>
                    ) : (
                      <p className="overviewTitle">No Rating Yet</p>
                    )
                  }      
                  
                  {movie.overview == "" ? (
                    <p className="overviewTitle">There's no overview Yet</p>
                    ) : (
                      <div>
                        <p className='overviewTitle'>Overview</p>
                        <p className='overview'>{movie.overview}</p>
                      </div>
                    )
                  }   
                </div>
              </div>
            </li>
        </ul>
      </div>
    );
};

export default Movie;