import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";
import imgSrc from '../../../../assets/img/ControlCenter/1527751377(1).jpg'

class SmartScape extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="box-container" style={{height:'12.5rem'}}>
                <CommonHeader title="SMARTSCAPE" titleSpan={12} lineSpan={12}/>
                <Row className="box-body">
                    <Col span={10}>
                        <img src={imgSrc} alt=""/>

                    </Col>
                    <Col span={14}>
                        <Row>
                            <Col span={14}>
                                DataCenters
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} offset={14}>
                                                Not detected
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>

        )
    }
}

export default SmartScape;