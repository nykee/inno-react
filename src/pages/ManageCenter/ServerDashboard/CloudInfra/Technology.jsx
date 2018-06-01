import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";
import L from '../../../../assets/img/ControlCenter/LEATHER.jpg';
import T from '../../../../assets/img/ControlCenter/TOMCAT.jpg';
import P from '../../../../assets/img/ControlCenter/PHP.jpg';


class Technology extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container" style={{height:'8.125rem'}}>
                <CommonHeader title="TECHNOLOGIES"/>
                <Row className="box-body">
                    <Col span={12}><img src={T} alt=""/></Col>
                    <Col span={12}><img src={L} alt=""/></Col>
                    <Col span={12}><img src={P} alt=""/></Col>
                </Row>
            </div>

        )
    }
}

export default Technology;