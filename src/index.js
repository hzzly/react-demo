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
	render() {
		return (
			<div className="comment-form">
				CommentForm
			</div>
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

	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList comments={this.state.comments}></CommentList>
				<CommentForm></CommentForm>
			</div>
		);
	}
}

ReactDOM.render(
	<CommentBox comments={comments}/>,
	document.getElementById('content')
);