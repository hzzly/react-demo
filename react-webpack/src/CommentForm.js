import React, { Component } from 'react';

class CommentForm extends Component {
    handleSubmit(e) {
		e.preventDefault()

		const author = this.refs.author.value.trim()
		const text = this.refs.text.value.trim()
		const form = this.refs.form

		this.props.onSubmit({author:author, text:text, date:"刚刚"})

		form.reset()
	}
    render() {
        return (
            <div className="comment-form" onSubmit={e => this.handleSubmit(e)}>
                <form className="ui reply form" ref="form">
                    <div className="ui input fluid i-name">
                        <input type="text" placeholder="You name..." ref="author"/>
                    </div>
                    <div className="field">
                        <textarea placeholder="评论" ref="text"></textarea>
                    </div>
                    <button type="submit" className="ui blue button">添加评论</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;