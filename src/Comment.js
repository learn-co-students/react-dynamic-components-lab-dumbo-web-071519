// add Comment component here
import React, { Component } from 'react';

export default class Comment extends Component {

    render() {
        // const comment = { this.props }
        return (
            <div className="comment" style={{ opacity: 2 }}>
                {/* your conditional code here! */}
                
                {this.props.commentText}
                
            </div>
        )
    }

}