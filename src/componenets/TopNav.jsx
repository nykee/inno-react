import {browserHistory,Link} from 'react-router'

import LoginBtn from '../componenets/LoginBtn'

import innoLogo from '../assets/img/nykeeLogo.png'
import ep from '../utils/eventProxy'
import React from 'react';
import { Layout, Menu, Dropdown, Avatar,Icon ,Row,Col} from 'antd';
const {  Sider } = Layout;



class TopNav extends React.Component {
    state = {
        current: '/',
        collapsed: false,
    };
    handleClick = (e) => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
        browserHistory.push(e.key)
    };
    componentDidMount(){
        // if(document.body.clientWidth <500){
        //     console.log("屏幕小于500px!");
        //     this.setState({
        //         collapsed:true
        //     })
        // }
        ep.on('fastEntranceItemClick',(path)=>{

        })
    }


    render() {

        return (

            <Row style={{backgroundColor:'rgba(2,123,187,0.6)'}}>
                <Col xs={{span:24}}
                     sm={{span:6}}
                     md={{span:6}}
                     lg={{span:6}}
                     xl={{span:6}}>
                    <img src={innoLogo} alt="" style={{height:'3.5rem',width:'6rem'}}/>
                </Col>
                <Col xs={{span:24}}
                     sm={{span:14}}
                     md={{span:14}}
                     lg={{span:14}}
                     xl={{span:14}}>

                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{backgroundColor:'rgba(2,123,187,0.0)'}}
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="/">
                            <i className="fa fa-home">首页</i>
                        </Menu.Item>

                        <Menu.Item key="/multicenter">
                            <i className="fa fa-hospital-o">多中心</i>
                        </Menu.Item>
                        <Menu.Item key="/managecenter">
                            {/*<Icon type="mail" /><span>数据中心</span>*/}
                            <i className="fa fa-database">数据中心</i>
                        </Menu.Item>



                    </Menu>


                </Col>

                <Col xs={{span:24}}
                     sm={{span:4}}
                     md={{span:4}}
                     lg={{span:4}}
                     xl={{span:4}}><Link to="/login"><LoginBtn /> </Link>  </Col>



            </Row>





        )
    }
}

export default TopNav;