import React from 'react';
import { Menu, Dropdown, Avatar,Icon ,Button} from 'antd';
import {browserHistory} from 'react-router'
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
            <div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item ><img src={innoLogo} alt="" /></Menu.Item>
                    <Menu.Item key="/">
                        <Icon type="mail" /><span>首页</span>
                    </Menu.Item>

                    <Menu.Item key="/multicenter">
                        <Icon type="mail" /><span>多中心</span>
                    </Menu.Item>
                    <Menu.Item key="/managecenter">
                        <Icon type="mail" /><span>管理中心</span>
                    </Menu.Item>


                    <Button type="primary">登录</Button>
                </Menu>

            </div>


        )
    }
}

export default TopNav;