import React from 'react';
import { Link } from 'react-router-dom';

//It works exactly the same way as the other SearchFormComponent, the only difference is the way it is displayed

class searchFormComponent2 extends React.Component {
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
    return  <form className='form2' onSubmit={this.handleSubmit}>
      <div className='text2'>
        <div className='searchBox2'>
          <img src='/search.svg' alt='search' className='searchIcon2'/>
          <input className='input2' type="text" onChange={this.handleChange} placeholder='Search for a movie, tv show, person...'/>
          <Link to={`/search/${this.state.value}`} state = {this.state.value}>
          <input className='submit' type="submit" value="Search" />
          </Link>
        </div>
      </div>
  </form>
  }
}

export default searchFormComponent2;