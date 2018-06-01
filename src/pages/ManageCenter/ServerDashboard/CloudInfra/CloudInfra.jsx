import React from 'react';
import SectionTitle from "../SectionTitle";
import {Col, Row} from "antd";
import Hosts from "./Hosts";
import Technology from "./Technology";
import Network from "./Network";
import VMware from "./VMware";

class CloudInfra extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div >
                <SectionTitle titleName="Cloud&infrastructure"/>
                <Row gutter={10} className="items">
                    <Col span={12}>
                        <Hosts amount={4}/>
                    </Col>
                    <Col span={12}>
                        <Technology/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <Network/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <VMware/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default CloudInfra;