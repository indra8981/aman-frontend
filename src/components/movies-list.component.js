import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = props => (
  <tr>
    <td>{props.movie.moviename}</td>
    <td><img src={props.movie.imglink} alt="Image" width="100" height="100" /></td>
    <td>{props.movie.summary}</td>
  </tr>
)

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

  componentDidMount() {
    axios.get('https://backend-movie-details-app.herokuapp.com/movies/')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  movieList() {
    return this.state.movies.map(currentmovie => {
      return <Movie movie={currentmovie} key={currentmovie._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Movies List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Moviename</th>
              <th>ImageLink</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            { this.movieList() }
          </tbody>
        </table>
      </div>
    )
  }
}