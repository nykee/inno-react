import React from 'react';
import {Col, Row} from "antd";


class CommonHeader extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Row className="common-header">
                <Col span={12} >
                    <span>{this.props.title}</span>
                </Col>
                <Col span={12}>
                   <span className="under-line">
            </span>
                </Col>
            </Row>

        )
    }
}

export default CommonHeader;