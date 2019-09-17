import React, { Component } from 'react'

export class Comment extends Component {

  render() {
    return (
      <div class="comment">
        {this.props.commentText}
      </div>
    )
  }

}
