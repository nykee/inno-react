import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";

class VMware extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container">
                <CommonHeader title="VMware | 2 vCenters"/>
                <Row className="box-body">
                    <Row>
                        <Col span={6} className="border-right-dotted">
                            <ul>
                                <li>&nbsp; </li>
                                <li>Migrations</li>
                                <li>Guests</li>
                            </ul>
                        </Col>
                        <Col span={5} className="border-right-dotted">
                            <ul>
                                <li className="gray-color">Today</li>
                                <li>
                                    <span>8</span>
                                    <i className="fa fa-arrow-down" style={{color:'#0CC1FB',marginLeft:'.2rem'}}/>
                                </li>
                                <li>
                                    <span>85</span>
                                    <i className="fa fa-arrow-down" style={{color:'#0CC1FB',marginLeft:'.2rem'}}/>
                                </li>
                            </ul>
                        </Col>
                        <Col span={5} className="border-right">
                            <ul>
                                <li className="gray-color">Last Fri</li>
                                <li>
                                    <span>14</span>
                                </li>
                                <li>
                                    <span>124</span>
                                </li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li >
                                    <span style={{fontSize:'2rem',display:'inline-block',color:'#F71F37'}}>4</span>
                                    <span style={{fontSize:'1.5rem',display:'inline-block'}}>/</span>
                                    <span style={{fontSize:'1.5rem',display:'inline-block'}}>5</span>
                                </li>
                                <li>
                                    <span style={{color:'#8E9696'}}>EXIST HOSTS</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'1.2rem',marginBottom:'1.4rem'}}>
                        <Col span={14 } offset={10}>
                            <span style={{color:'#0CC1FB',cursor:'pointer'}}>Start VMware monitoring</span>
                        </Col>
                    </Row>

                </Row>
            </div>

        )
    }
}

export default VMware;