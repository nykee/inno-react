import React from 'react';
import {  Col, Row} from 'antd';
import {Link} from 'react-router'
import innoLogo from '../assets/img/inno1.png'


class Footer extends React.Component {
    render() {
        return (
            <div   className="Footer">
                <Row>
                    <Col span={8}>
                        <ul>
                            <li >快速入口</li>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/multicenter">多中心</Link></li>
                            <li><Link to="/managecenter">管理中心</Link></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                        <ul>
                            <li>云平台咨询</li>
                            <li><Link to="/">常见问题FAQ</Link></li>
                        </ul>
                    </Col>
                    <Col span={8}>
                        <ul>
                            <li>联系我们</li>
                            <li>地址：上海市漕河泾开发区松江高科技园
                                莘砖公路518号11栋1004室</li>
                            <li>电话：021-37027535 37027537</li>
                            <li>传真：021-67690739</li>
                            <li>E-mail：info@innomotion.biz</li>
                            <li>http://www.innomotion.biz</li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{borderTop:'1px dotted #000',paddingTop:'0.5rem'}}>
                    <Col span={8}>
                        <ul>
                            <li>上海逸动医学科技有限公司</li>
                            <li>Copyright © 2012-2017 Shanghai Innomotion Medical Inc. All Rights Reserved</li>
                        </ul></Col>
                    <Col  span={3} offset={13}><img src={innoLogo} alt=""/></Col>
                </Row>
            </div>

        )
    }
}

export default Footer;