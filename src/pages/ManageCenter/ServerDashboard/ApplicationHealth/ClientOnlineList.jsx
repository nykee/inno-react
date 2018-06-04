import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";

class ClientOnlineList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container">
                <CommonHeader title="ONLINE CLIENT LISTS" titleSpan={14} lineSpan={10}/>
                <Row className="box-body">
                    <Row>
                        <Col span={5} offset={19}>
                            <span>Reload</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <ul>
                                <li>192.168.1.22</li>
                                <li>192.168.1.23</li>
                                <li>192.168.1.24</li>
                                <li>192.168.1.26</li>
                                <li>192.168.1.27</li>
                            </ul>
                        </Col>
                    </Row>

                </Row>
            </div>

        )
    }
}

export default ClientOnlineList;