import React from 'react';
import CommonTitle from "../../../componenets/common/CommonTitle";
import {Col, Row} from "antd";
import AllSummaryPie from "./AllSummaryPie";
import DeliverySummary from "./DeliverySummary";
import CarSummary from "./CarSummary";

class ConsolePanel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    // componentWillMount() {
    //
    // }

    render() {
        return (
            <div>
                <CommonTitle titleName="物流控制台"/>
                <Row>
                    <Col span={8}>
                        <AllSummaryPie/>
                    </Col>
                    <Col span={8}>
                        <DeliverySummary/>
                    </Col>
                    <Col span={8}>
                        <CarSummary/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ConsolePanel;