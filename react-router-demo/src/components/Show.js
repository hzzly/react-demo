import React, { Component } from 'react';

class Show extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>节目 {this.props.params.id}</h3>
            </div>
        );
    }
}

export default Show;