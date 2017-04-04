import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item">电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;