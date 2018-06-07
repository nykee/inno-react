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
    };
    handleClick = (e) => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
        browserHistory.push(e.key)
    };
    componentDidMount(){
        ep.on('fastEntranceItemClick',(path)=>{

        })
    }


    render() {

        return (

            <Row style={{backgroundColor:'rgba(2,123,187,0.6)'}}>
                <Col xs={{span:4}}
                     sm={{span:6}}
                     md={{span:6}}
                     lg={{span:6}}
                     xl={{span:6}}>
                    <img src={innoLogo} alt="" style={{height:'3.5rem',width:'3.5rem'}}/>
                </Col>
                <Col xs={{span:16}}
                     sm={{span:14}}
                     md={{span:14}}
                     lg={{span:14}}
                     xl={{span:14}}>

                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{backgroundColor:'rgba(2,123,187,0.0)'}}
                    >
                        <Menu.Item key="/">
                            <Icon type="mail" /><span>首页</span>
                        </Menu.Item>

                        <Menu.Item key="/multicenter">
                            <Icon type="mail" /><span>多中心</span>
                        </Menu.Item>
                        <Menu.Item key="/managecenter">
                            <Icon type="mail" /><span>数据中心</span>
                        </Menu.Item>



                    </Menu>


                </Col>

                <Col xs={{span:4}}
                     sm={{span:4}}
                     md={{span:4}}
                     lg={{span:4}}
                     xl={{span:4}}><Link to="/login"><LoginBtn /> </Link>  </Col>



            </Row>





        )
    }
}

export default TopNav;