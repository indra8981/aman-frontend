import React, { Component } from 'react';
import axios from 'axios';


export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onChangeMoviename = this.onChangeMoviename.bind(this);
    this.onChangeImageLink = this.onChangeImageLink.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      moviename: '',
      imglink: '',
      summary: ''
    }
  }

  onChangeMoviename(e) {
    this.setState({
      moviename: e.target.value
    })
  }

  onChangeImageLink(e) {
    this.setState({
      imglink: e.target.value
    })
  }

  onChangeSummary(e) {
    this.setState({
      summary: e.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault();

    const movie = {
      moviename: this.state.moviename,
      imglink: this.state.imglink,
      summary: this.state.summary
    }

    
    console.log(movie);
    await axios.post('https://backend-movie-details-app.herokuapp.com/movies/add', movie)
      .then(res => console.log(res.data));
    
    window.location = '/';

  }

  render() {
    return (
      <div>
        <h3>Add new Movie details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Movie Name: </label>
          <input  type="text"
            required
            className="form-control"
            value={this.state.moviename}
            onChange={this.onChangeMoviename}
          />
        </div>
        <div className="form-group"> 
          <label>Image Link: </label>
          <input  type="text"
            required
            className="form-control"
            value={this.state.imglink}
            onChange={this.onChangeImageLink}
          />
        </div>
        <div className="form-group">
          <label>Summary: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.summary}
              onChange={this.onChangeSummary}
            />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Movie" className="btn btn-primary" />
        </div>
      </form>
      </div>
    )
  }
}