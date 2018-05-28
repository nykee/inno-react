import React from 'react';

class HospItems extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <a >
                <img src={this.props.src} alt={this.props.name} className="centerListsItems-img"/>
                <span className="centerListsItems-text">{this.props.name}</span>
            </a>

        )
    }
}

export default HospItems;