import React from 'react';
import {Row,Col} from 'antd'
import RoadNetwork from './RoadNetwork'
import Cargo from './Cargo'
import PlatformSummary from './PlatformSummary'
import ConsolePanel from "./ConsolePanel";

class TransDash extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let transdashContainer={
            padding:'.8rem',

        };
        return (
            <div style={transdashContainer}>
                <Row>
                    <Col lg={{span:14}} xs={{span:24}}>
                        <RoadNetwork/>
                    </Col>
                    <Col lg={{span:10}} xs={{span:24}}>
                        <PlatformSummary/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span:14}} xs={{span:24}}>
                        <Cargo/>
                    </Col>
                    <Col lg={{span:10}} xs={{span:24}}>
                        <ConsolePanel/>
                    </Col>
                </Row>
            </div>


        )
    }
}
export default TransDash;