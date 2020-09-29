import React, { Component } from 'react'
import axios from 'axios'

const endpoint = 'https://yts.mx/api/v2/list_movies.json'

export class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  async getMovies() {
    const { data: { data: { movies } } } = await axios.get(endpoint)
    this.setState({
      movies,
      isLoading: false
    })
    console.log(this.state.movies)
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}