import React from 'react';
import Mock from 'mockjs';
import axios from 'axios'
import {Row,Col,Menu,Icon,Select,Button} from 'antd';
import LineChart from '../componenets/D3Charts/LineChart';
import PieChart from '../componenets/D3Charts/PieChart'
import ForceChart from '../componenets/D3Charts/ForceChart'
import TreeChart from '../componenets/D3Charts/TreeChart'
import PackChart from '../componenets/D3Charts/PackChart'
import MapChart from '../componenets/D3Charts/MapChart'

const SubMenu = Menu.SubMenu;
const Option = Select.Option;

class ManageCenter extends React.Component {
    constructor(){
        super();
        this.state ={

        }
    }
    state = {
        openKeys: ['sub1'],
    };
    componentDidMount(){




    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    handleChange =(value)=>{
        console.log(`selected ${value}`);
        if(value ==="age"){

        }
    };
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            style={{ width: 256 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>运动学数据分析</span></span>}>
                                <Menu.Item key="1">数据上传</Menu.Item>
                                <Menu.Item key="2">图表分析</Menu.Item>
                                <Menu.Item key="3">数据管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={18}>

                            {/*数据上传*/}
                            <div>

                            </div>

                            {/*图表分析*/}
                            <div>
                                <h2>运动学数据图表分析</h2>
                                <span>请选择统计维度</span>
                                <Select defaultValue="age" style={{ width: 120 }} onChange={this.handleChange}>
                                    <Option value="age">年龄</Option>
                                    <Option value="month">月份</Option>
                                    <Option value="dType">病种</Option>
                                    <Option value="gender">性别</Option>
                                </Select>
                                <Button type="primary">提交 </Button>

                                <Row>
                                    <Col span={8}>
                                        <LineChart/>
                                    </Col>
                                    <Col span={8}>
                                        <PieChart/>
                                    </Col>
                                    <Col span={8}>
                                        <ForceChart/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <TreeChart/>
                                    </Col>
                                    <Col span={8}>
                                        <PackChart/>
                                    </Col>
                                    <Col span={8}>
                                        <MapChart/>
                                    </Col>


                                </Row>



                            </div>

                            {/*数据管理*/}
                            <div>

                            </div>

                    </Col>
                </Row>
            </div>

        )
    }
}

export default ManageCenter;