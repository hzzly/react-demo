//Comment组件
class Comment extends React.Component {
	render() {
		return (
			<div>
				<div className="comment-body">
					{this.props.children}
				</div>
				<div className="comment-author">
					-{this.props.author}
				</div>
			</div>
		)
	}
}

//CommentList组件
class CommentList extends React.Component {

	constructor() {
		super()		
	}

	render() {
		console.log(this.props.comments)
		let commentsNode = this.props.comments.map((comment,index) => {
			return <Comment key={'comment-' + index} author={comment.author}>{comment.body}</Comment>
		})
		return (
			<div className="comment-list">
				{commentsNode}
			</div>
		)
	}
}

//CommentForm组件
class CommentForm extends React.Component {

	handleSubmit(e) {
		e.preventDefault()

		const author = this.refs.author.value.trim()
		const body = this.refs.body.value.trim()
		const form = this.refs.form

		this.props.onSubmit({author:author,body:body})

		form.reset()
	}

	render() {
		return (
			<form className="comment-form" ref="form" onSubmit={e => this.handleSubmit(e)}>
				<input type="text" placeholder="input you name" ref="author"/>
				<input type="text" placeholder="input you comment" ref="body"/>
				<input type="submit" value="Add Comment" />
			</form>
		)
	}
}


//测试数据
let comments = [
	{author: 'hzzly', body: 'this is a comment'},
	{author: 'hzzly2', body: '哈哈哈哈'}
]


//CommentBox组件
class CommentBox extends React.Component {

	constructor(props) {
		super()
		this.state = {
			comments: props.comments
		}
	}

	handleNewComment(comment) {

		const comments = this.state.comments
		const newCommnent = comments.concat(comment)
		this.setState({
			comments: newCommnent
		})

		setTimeout(() => {
			$.ajax({
				url: this.props.url,
				type: 'POST',
				dataType: 'json',
				data: comment,
				success: comments => {
					this.setState({
						comments: comments
					})
				},
				error: (err) => {
					// console.log(err)
					this.setState({
						comments: comments
					})
				}
			})
		}, 2000);
		
		
	}

	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList comments={this.state.comments}></CommentList>
				<CommentForm onSubmit={comment => this.handleNewComment(comment)}></CommentForm>
			</div>
		);
	}
}

ReactDOM.render(
	<CommentBox comments={comments}/>,
	document.getElementById('content')
);