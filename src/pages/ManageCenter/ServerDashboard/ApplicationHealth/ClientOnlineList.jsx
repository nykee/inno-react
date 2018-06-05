import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";

class ClientOnlineList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var ul1 = document.getElementById("ul1");
        var ul2 = document.getElementById("ul2");
        var box = document.getElementById("box");
        function roll(t) {

            ul2.innerHTML = ul1.innerHTML;
            box.scrollTop = 0;
            var timer = setInterval(rollStart, t);
            box.onmouseover = function () {
                clearInterval(timer)
            };
            box.onmouseout = function () {
                timer = setInterval(rollStart, t);
            }
        }
         roll(100);


        function rollStart() {
            if (box.scrollTop >= ul1.scrollHeight) {
                box.scrollTop = 0;
            } else {
                box.scrollTop++;
            }
        }

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

                            <div id="box">
                                <ul id="ul1">
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.22</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.23</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.24</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.26</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.28</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.134</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.55</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.29</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.121</li>
                                    <li style={{marginBottom:'.3rem'}}>192.168.1.155</li>
                                </ul>
                                <ul id="ul2"></ul>
                            </div>

                        </Col>
                    </Row>

                </Row>
            </div>

        )
    }
}

export default ClientOnlineList;