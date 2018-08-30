import React from 'react';
import {Row,Col,Menu,Icon} from 'antd';



// import D3ChartContainer from './D3ChartContainer'
// import HChartContainer from './HChartContainer'
import SalesDashboard from './SalesDashboard/SalesDashboard'
// import SalesDashboardD3 from './SalesDashboardD3/SalesDashboardD3'
import SalesDashboardRe from './SalesDashboardRechart/SalesDashboardRechart'
import ServerDashboard from './ServerDashboard/ServerDashboard'
import TransDash from './TransDashboard/TransDash'
import Header from './Header'

import '../../style/ManageCenter.css'




const SubMenu = Menu.SubMenu;


class ManageCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            openKeys: ['sub1'],
            collapsed: false,
            current:'4'
        }
    }
    componentDidMount(){

   /* var aw =window.screen.availWidth;
    console.log(aw);*/
    // console.log(document.body.clientWidth );
    if(document.body.clientWidth <500){
        console.log("屏幕小于500px!");
        this.setState({
            collapsed:true
        })
    }


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
            chartContainer;

        if(this.state.current === '3'){
            title ="echarts-服务端监控DashBoard";
            chartContainer =<ServerDashboard/>
        }
        else if(this.state.current === '4'){
            title ="销售业务监控-DashBoard-echarts";
            chartContainer =<SalesDashboard/>
        }
       /* else if(this.state.current === '5'){
            title ="销售业务监控-DashBoard-D3";
            chartContainer =<SalesDashboardD3/>
        }*/
        else if(this.state.current === '6'){
            title ="销售业务监控-DashBoard-Rechart";
            chartContainer =<SalesDashboardRe/>
        }
        else if(this.state.current === '7'){
            title ="物流运输监控-DashBoard-Rechart";
            chartContainer =<TransDash/>
        }




        return (
            <div>
                <Row>
                    <Col   xs={{span:24}} sm={{span:3}} md={{span:3}} lg={{span:3}}>
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            selectedKeys={[this.state.current]}
                            style={{ marginRight:0}}
                            onClick={this.handleClick}
                            inlineCollapsed={this.state.collapsed}

                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dashboard图表分析</span></span>}>
                                {/*<Menu.Item key="1" >D3.js图表</Menu.Item>*/}
                                {/*<Menu.Item key="2">HighChart图表</Menu.Item>*/}
                                <Menu.Item key="3">服务端监控DashBoard-echarts</Menu.Item>
                                <Menu.Item key="4">销售业务监控DashBoard-echarts</Menu.Item>
                                {/*<Menu.Item key="5">D3-销售业务监控DashBoard</Menu.Item>*/}
                                <Menu.Item key="6">销售业务监控DashBoard-Rechart</Menu.Item>
                                <Menu.Item key="7">物流运输监控DashBoard-Rechart</Menu.Item>
                            </SubMenu>

                        </Menu>
                        {/*<MobileMenu></MobileMenu>*/}

                    </Col>
                    <Col xs={{span:24}} sm={{span:21}} md={{span:21}} lg={{span:21}}  className="blackBG">
                            <div>
                                <Header title={title} selected={this.state.current}/>
                                {(this.state.current.toString() ==="3"||this.state.current.toString() ==="4")?'':''}
                                {chartContainer}

                            </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ManageCenter;