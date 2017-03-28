import React, { Component } from 'react';

import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends Component {
    constructor(props) {
        super()
        this.state = {
            comments: props.comments || []
        }
    }
    getData() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: comments => {
                this.setState({
                    comments: comments
                })
            }
        })
    }
    componentDidMount() {
        this.getData()
    }
    handleNewComment(comment) {
        let comments = this.state.comments
		let newCommnent = comments.concat(comment)
		this.setState({
			comments: newCommnent
		})

		// setTimeout(() => {
		// 	$.ajax({
		// 		url: this.props.url,
		// 		type: 'POST',
		// 		dataType: 'json',
		// 		data: comment,
		// 		success: (comments) => {
		// 			this.setState({
		// 				comments: comments
		// 			})
		// 		},
		// 		error: (err) => {
		// 			// console.log(err)
		// 			this.setState({
		// 				comments: comments
		// 			})
		// 		}
		// 	})
		// }, 2000);
		
		
    }
    render() {
        return (
            <div className="comment-box">
                <CommentList comments={this.state.comments}></CommentList>
                <CommentForm onSubmit={comment => this.handleNewComment(comment)}></CommentForm>
            </div>
        );
    }
}

export default CommentBox;