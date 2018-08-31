import React from 'react';
import {Row,Col,Menu,Layout, Icon} from 'antd';



// import D3ChartContainer from './D3ChartContainer'
// import HChartContainer from './HChartContainer'
import SalesDashboard from './SalesDashboard/SalesDashboard'
// import SalesDashboardD3 from './SalesDashboardD3/SalesDashboardD3'
import SalesDashboardRe from './SalesDashboardRechart/SalesDashboardRechart'
import ServerDashboard from './ServerDashboard/ServerDashboard'
import TransDash from './TransDashboard/TransDash'
import Header from './Header'

import '../../style/ManageCenter.css'

const {Sider, Content} =Layout;


const SubMenu = Menu.SubMenu;


class ManageCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            openKeys: ['sub1'],
            // collapsed: false,
            current:'4'
        }
    }
    componentDidMount(){

   /* var aw =window.screen.availWidth;
    console.log(aw);*/
    // console.log(document.body.clientWidth );
   /* if(document.body.clientWidth <500){
        console.log("屏幕小于500px!");
        this.setState({
            collapsed:true
        })
    }*/


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

        if(this.state.current.toString() === '3'){
            title ="服务端监控DashBoard";
            chartContainer =<ServerDashboard/>
        }
        else if(this.state.current.toString() === '4'){
            title ="销售业务监控DashBoard";
            chartContainer =<SalesDashboard/>
        }
        else if(this.state.current.toString() === '6'){
            title ="销售业务监控DashBoard";
            chartContainer =<SalesDashboardRe/>
        }
        else if(this.state.current.toString() === '7'){
            title ="物流运输监控DashBoard";
            chartContainer =<TransDash/>
        }




        return (
            <Layout>
                {/*<Row>*/}
                    <Sider breakpoint="lg"
                           collapsedWidth="0"
                           width="10rem"
                           // onBreakpoint={(broken) => { console.log(broken); }}
                           onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                        {/*<Col   xs={{span:24}} sm={{span:3}} md={{span:3}} lg={{span:3}}>*/}
                            <Menu
                                mode="inline"
                                openKeys={this.state.openKeys}
                                onOpenChange={this.onOpenChange}
                                selectedKeys={[this.state.current]}
                                style={{ marginRight:0}}
                                onClick={this.handleClick}

                            >
                                <SubMenu key="sub1" title={<span><i className="fa fa-tachometer fa-lg"  /><span>Dashboard图表分析</span></span>}>
                                    <Menu.Item key="3">服务端监控DashBoard</Menu.Item>
                                    <Menu.Item key="4">销售业务监控DashBoard</Menu.Item>
                                    <Menu.Item key="6">销售业务监控DashBoard</Menu.Item>
                                    <Menu.Item key="7">物流运输监控DashBoard</Menu.Item>
                                </SubMenu>

                            </Menu>

                        {/*</Col>*/}
                    </Sider>

                    <Layout>
                        {/*<Col xs={{span:24}} sm={{span:21}} md={{span:21}} lg={{span:21}}  className="blackBG">*/}
                            <Content className="blackBG">
                                <Header title={title} selected={this.state.current}/>
                                {chartContainer}

                            </Content>
                        {/*</Col>*/}
                    </Layout>

                {/*</Row>*/}
            </Layout>

        )
    }
}

export default ManageCenter;