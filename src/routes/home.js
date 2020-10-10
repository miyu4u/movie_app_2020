import React, { Component } from 'react'
import './home.css'
import axios from 'axios'
import Movie from '../components/movie'
const endpoint = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

export class Home extends Component {
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
        const { isLoading, movies } = this.state
        return (
            <section className="container">
                {
                    isLoading ?
                        (<div className="loader">
                            <span className="loader__text">Loading</span>
                        </div>)
                        : (
                            <div className="movies">
                                {movies.map(movie => (
                                    <Movie
                                        key={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />))}
                            </div>
                        )}
            </section>
        )
    }
}