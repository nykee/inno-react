import React from 'react';

class SectionTitle extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <h3 className="section-title" >{this.props.titleName}</h3>

        )
    }
}

export default SectionTitle;