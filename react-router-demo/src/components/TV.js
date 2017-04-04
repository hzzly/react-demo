import React, { Component } from 'react';

class TV extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default TV;