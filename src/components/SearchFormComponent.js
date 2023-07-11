import React from 'react';
import { Link } from 'react-router-dom';

//That is the search bar of the landing page which contains the title and text that you'd read first
//Then a search box with a handleChange function, that when you press enter the value from the seacrh box is passed to the search page

class searchFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return  <form className='form top' onSubmit={this.handleSubmit}>
      <div className='text'>
        <a className='majorTitle'>Welcome.</a><br></br>
        <a className='minorTitle'>Start exploring an endless array of movies, TV shows and stars!</a><br></br>
        <div className='searchBox'>
          <img src='/search.svg' alt='search' className='searchIcon1'/>
          <input className='input' type="text" onChange={this.handleChange} placeholder='Search for a movie, tv show, person...'/>
          <Link to={`/search/${this.state.value}`} state = {this.state.value}>
          <input className='submit' type="submit" value="Search" />
          </Link>
        </div>
      </div>
  </form>
  }
}

export default searchFormComponent;