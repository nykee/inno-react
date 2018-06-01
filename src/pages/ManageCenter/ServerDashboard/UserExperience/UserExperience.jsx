import React from 'react';
import SectionTitle from "../SectionTitle";
import {Col, Row} from "antd";
import Applications from "./Applications";

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
            </div>

        )
    }
}

export default UserExperience;