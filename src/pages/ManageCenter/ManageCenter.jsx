import React from 'react';
import {Row, Col, Menu, Layout, Icon, Sider} from 'antd';



// import D3ChartContainer from './D3ChartContainer'
// import HChartContainer from './HChartContainer'
import SalesDashboard from './SalesDashboard/SalesDashboard'
// import SalesDashboardD3 from './SalesDashboardD3/SalesDashboardD3'
import SalesDashboardRe from './SalesDashboardRechart/SalesDashboardRechart'
import ServerDashboard from './ServerDashboard/ServerDashboard'
import TransDash from './TransDashboard/TransDash'
import Header from './Header'
import DataUpload from "./SportsAnyalyze/DataUpload"
import BasicChartAnalyze from "./SportsAnyalyze/BasicChartAnalyze"

import '../../style/ManageCenter.css'

// const { Content} =Layout;


const SubMenu = Menu.SubMenu;


class ManageCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            openKeys: ['sub2'],
            // collapsed: false,
            current:'6'
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
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        let title,
            subPageContainer;

        switch (this.state.current.toString()){
            case "1":
                title ="服务器端监控DashBoard";
                subPageContainer =<ServerDashboard/>;
                break;
            case "2":
                title ="销售业务监控DashBoard";
                subPageContainer =<SalesDashboard/>;
                break;
            case "3":
                title ="销售业务监控DashBoard";
                subPageContainer =<SalesDashboardRe/>;
                break;
            case "4":
                title ="物流运输监控DashBoard";
                subPageContainer =<TransDash/>;
                break;
            case "5":
                title ="运动学数据上传";
                subPageContainer =<DataUpload/>;
                break;
            case "6":
                title ="运动学基本图表分析";
                subPageContainer =<BasicChartAnalyze/>;
                break;
            default:
                title ="运动学基本图表分析";
                subPageContainer =<BasicChartAnalyze/>;
                break;
        }




        return (

                <Row>
                    <Sider breakpoint="lg"
                           collapsedWidth="0"
                           width="10rem"
                           // onBreakpoint={(broken) => { console.log(broken); }}
                           onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                        <Col   xs={{span:24}} sm={{span:3}} md={{span:3}} lg={{span:3}}>
                            <Menu
                                mode="inline"
                                openKeys={this.state.openKeys}
                                onOpenChange={this.onOpenChange}
                                selectedKeys={[this.state.current]}
                                style={{ marginRight:0}}
                                onClick={this.handleClick}

                            >
                                <SubMenu key="sub1" title={<span><i className="fa fa-tachometer fa-lg"  /><span>Dashboard图表分析</span></span>}>
                                    <Menu.Item key="1">服务器端监控DashBoard</Menu.Item>
                                    <Menu.Item key="2">销售业务监控DashBoard</Menu.Item>
                                    <Menu.Item key="3">销售业务监控DashBoard</Menu.Item>
                                    <Menu.Item key="4">物流运输监控DashBoard</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><i className="fa fa-tachometer fa-lg"  /><span>运动学数据系统</span></span>}>
                                    <Menu.Item key="5">opt文件上传</Menu.Item>
                                    <Menu.Item key="6">基本图表分析</Menu.Item>

                                </SubMenu>

                            </Menu>

                        </Col>
                    </Sider>


                        <Col xs={{span:24}} sm={{span:21}} md={{span:21}} lg={{span:21}}  className="blackBG">
                            <div className="blackBG">
                                <Header title={title} selected={this.state.current}/>
                                {subPageContainer}

                            </div>
                        </Col>


                </Row>


        )
    }
}

export default ManageCenter;