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
            paddingLeft:'.5rem',
            paddingRight:'.3rem'
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
/*
* *<Row style={transdashContainer}>
                <Col lg={{span:14}}>
                    <Row>
                        <Col lg={{span:24}}>
                            <RoadNetwork/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'.3rem'}}>
                        <Col lg={{span:24}}>
                            <Cargo/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{span:10}}>
                    <Row>
                        <Col lg={{span:24}}>
                            <PlatformSummary/>
                        </Col>
                        <Col>
                            <ConsolePanel/>
                        </Col>
                    </Row>
                </Col>
            </Row>*/
export default TransDash;