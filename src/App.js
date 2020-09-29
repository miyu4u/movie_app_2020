import React, { Component } from 'react'


export class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    // 영화 로딩
    setTimeout(() => this.setState({ isLoading: false }), 6000);
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