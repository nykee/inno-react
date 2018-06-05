import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row, Select} from "antd";
const Option = Select.Option;

class Database extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'react_SSR',
            comment:1.67,
            statement:1.75,
            responsetime:0.4


        };
    }

    componentDidMount() {

    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            selected:value
        })
        if(value ==='react_SSR'){
            this.setState({
                comment:1.67,
                statement:1.75,
                responsetime:0.4
            })
        }
        else if(value ==='vue_SSR'){
            this.setState({
                comment:2.02,
                statement:3.75,
                responsetime:0.56
            })
        }
        else {
            this.setState({
                comment:3.67,
                statement:2.25,
                responsetime:0.25
            })
        }
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
                    <Row style={{paddingTop:'.2rem'}}>
                        <Col span={8}>
                            <ul>
                                <li>
                                    <span className="perfor-number">{this.state.comment}</span>
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
                                    <span className="perfor-number">{this.state.statement}</span>
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
                                    <span  className="perfor-number">{this.state.responsetime}</span>
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