import React from 'react';
import {Col, Row} from "antd";

class CargoTableHeader extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let tableHeaderStyle ={
            color:'#85D8F6',
            backgroundColor:'#193C64',
            border:'1px solid #363B41',
            borderLeft:'none',
            padding:'.5rem 0',
        };
        return (
            <Row >
                <Col span={6} style={tableHeaderStyle}>
                    <span>车牌</span>
                </Col>
                <Col span={6} style={tableHeaderStyle}>
                    <span>卸货仓位</span>
                </Col>
                <Col span={6} style={tableHeaderStyle}>
                    <span>卸货情况</span>
                </Col>
                <Col span={6} style={tableHeaderStyle}>
                    <span>预计完成</span>
                </Col>
            </Row>

        )
    }
}

export default CargoTableHeader;