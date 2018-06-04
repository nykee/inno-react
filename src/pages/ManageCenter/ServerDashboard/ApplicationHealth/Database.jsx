import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row, Select} from "antd";
const Option = Select.Option;

class Database extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'react_SSR'
        };
    }

    componentDidMount() {

    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            selected:value
        })
    }

    render() {
        return (
            <div className="box-container">
                <CommonHeader title="DATABASE" titleSpan={8} lineSpan={16}/>
                <Row className="box-body">
                    <Row>
                        <Col span={24}>
                            <Select defaultValue="react_SSR"
                                    style={{width:'90%',backgroundColor:'#3E3E3E'}}
                                    onChange={this.handleChange.bind(this)}
                            >
                                <Option value="react_SSR">react_SSR</Option>
                                <Option value="vue_SSR">vue_SSR</Option>
                                <Option value="SSR">SSR</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <ul>
                                <li>
                                    <span className="perfor-number">1.67</span>
                                    <span className='gray-color'>k/min</span>
                                </li>
                                <li>
                                    <span className='gray-color'>COMMENT</span>
                                </li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li>
                                    <span className="perfor-number">1.75</span>
                                    <span className='gray-color'>k/min</span>
                                </li>
                                <li>
                                    <span className='gray-color'>STATEMENT</span>
                                </li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li>
                                    <span  className="perfor-number">0.4</span>
                                    <span className='gray-color'>ms</span>
                                </li>
                                <li>
                                    <span className='gray-color'>RESPONESE</span><br/>
                                    <span className='gray-color'>TIME</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>


                </Row>
            </div>

        )
    }
}

export default Database;