import React from 'react';
import { Menu, Dropdown, Avatar,Icon ,Button,Row,Col} from 'antd';
import {browserHistory} from 'react-router'
// import CustomButton from '../componenets/CustomButton'
import LoginBtn from '../componenets/LoginBtn'
import userAvatar from '../assets/img/nykee.png'
import innoLogo from '../assets/img/inno1.png'

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


    render() {

        return (
            <Row style={{backgroundColor:'rgba(2,123,187,0.6)'}}>
                <Col span={6}><img src={innoLogo} alt="" /></Col>
                <Col span={14}>
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
                            <Icon type="mail" /><span>管理中心</span>
                        </Menu.Item>



                    </Menu>
                </Col>

                <Col span={4}><LoginBtn ></LoginBtn>   </Col>



            </Row>


        )
    }
}

export default TopNav;