import React from 'react';
import SectionTitle from "../SectionTitle";
import {Col, Row} from "antd";
import Applications from "./ApplicationsUE";
import ThirdParty from "./ThirdParty";

class UserExperience extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <SectionTitle titleName="User experience"/>
                <Row className="items">
                    <Col span={24}>
                        <Applications/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <ThirdParty/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default UserExperience;