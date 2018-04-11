import React from 'react';
import Mock from 'mockjs';
import axios from 'axios'
import {Row,Col,Menu,Icon,Select,Button} from 'antd';

import SelectPanel from './SelectPanel'
import D3ChartContainer from './D3ChartContainer'
import HChartContainer from './HChartContainer'
import Header from './Header'

import '../../style/ManageCenter.css'



const SubMenu = Menu.SubMenu;


class ManageCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            openKeys: ['sub1'],
            current:'1'
        }
    }
    componentDidMount(){




    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
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

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        let title,
            chartContainer;
        if(this.state.current === '1'){
            title ="运动学数据图表分析-D3";
            chartContainer =<D3ChartContainer/>
        }
        else if(this.state.current === '2'){
            title ="运动学数据图表分析-Highcharts";
            chartContainer = <HChartContainer/>
        }
        else if(this.state.current === '3'){
            title ="客户端连接监控-DashBoard"
        }
        else if(this.state.current === '4'){
            title ="销售业界监控盘-DashBoard"
        }

        return (
            <div>
                <Row>
                    <Col span={5} >
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            selectedKeys={[this.state.current]}
                            style={{ width: 256,height:900 ,marginRight:0}}
                            onClick={this.handleClick}

                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>运动学图表分析</span></span>}>
                                <Menu.Item key="1" >D3.js图表</Menu.Item>
                                <Menu.Item key="2">HighChart图表</Menu.Item>
                                <Menu.Item key="3">客户端连接监控DashBoard</Menu.Item>
                                <Menu.Item key="4">销售业务监控DashBoard</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={19} style={{height:'900px'}} className={this.state.current ==="3"?'blackBG':''}>
                            <div>
                                <Header title={title} selected={this.state.current}/>
                                {(this.state.current ==="3"||this.state.current ==="4")?'':<SelectPanel/>}
                                {chartContainer}

                            </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ManageCenter;