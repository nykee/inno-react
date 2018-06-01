import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";

class Hosts extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container" style={{height:'8.125rem'}}>
                <CommonHeader title="HOSTS"/>
                <Row className="box-body">
                    <Col span={14} style={{textAlign:'center',height:'6rem',lineHeight:'6rem'}}>
                        <span style={{fontSize:'0.8rem'}}>All fine</span>
                    </Col>
                    <Col span={10} style={{textAlign:'center',height:'6rem',lineHeight:'6rem'}}>
                        <span style={{fontSize:'3.8rem'}}>{this.props.amount}</span>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Hosts;