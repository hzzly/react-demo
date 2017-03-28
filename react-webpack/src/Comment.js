import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="ui comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src="/src/assets/images/avatar.jpg" />
                        </a>
                        <div className="content">
                            <a className="author">{this.props.author}</a>
                            <div className="metadata">
                                <div className="date">{this.props.date}</div>
                            </div>
                            <div className="text">{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;