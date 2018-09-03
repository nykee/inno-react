import React from 'react';
import CommonTitle from "../../../componenets/common/CommonTitle";
import {Col, Row} from "antd";
import AllSummaryPie from "./AllSummaryPie";

class ConsolePanel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <CommonTitle titleName="物流控制台"/>
                <Row>
                    <Col span={8}>
                        <AllSummaryPie/>
                    </Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
            </div>

        )
    }
}

export default ConsolePanel;