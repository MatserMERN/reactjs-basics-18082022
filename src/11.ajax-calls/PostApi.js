import React, { Component } from 'react'

export class PostApi extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }
  render() {
    return (
      <div>
        <h1>Post List</h1>
        {
          this.state.posts.map(post => (
            <>
            <ul key={post.id} className="list-group" style={{textAlign: "center"}}>
              <li className="list-group-item">{post.id}</li>
              <li className="list-group-item">{post.title}</li>
              <li className="list-group-item">{post.body}</li>
            </ul>
            <br />
            </>
          ))
        }

      </div>
    )
  }
}

export default PostApi