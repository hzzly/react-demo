import React, { Component } from 'react';

import Comment from './Comment'

class CommentList extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props.comments)
        let commentsNode = this.props.comments.map((comment, index) => {
            return <Comment key={'comment-'+index} author={comment.author} date={comment.date}>{comment.text}</Comment>
        })
        return (
            <div>
                {commentsNode}
            </div>
        );
    }
}

export default CommentList;