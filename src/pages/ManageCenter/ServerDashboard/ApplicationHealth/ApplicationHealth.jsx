import React from 'react';
import SectionTitle from "../SectionTitle";
import {Col, Row} from "antd";
import Services from "./Services";
import Database from "./Database";
import UserOnlineList from "./ClientOnlineList";

class ApplicationHealth extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <SectionTitle titleName="Application health"/>
                <Row  className="items">
                    <Col span={24}>
                        <Services/>
                    </Col>

                </Row>
                <Row className="items">
                    <Col span={24}>
                        <Database/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <UserOnlineList/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ApplicationHealth;