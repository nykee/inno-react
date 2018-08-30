import React from 'react';
import {  Col, Row} from 'antd';
import CustomLink from './CustomLink'
import innoLogo from '../assets/img/nykeeLogo.png'


class Footer extends React.Component {

    /*triggerLinkEvent(arg){
        console.log(arg);
    }*/
    render() {


        return (
            <div   className="Footer" style={{marginTop:'0.1rem',backgroundColor:'#027BBB',color:'#A0DEF4',paddingTop:'1.5rem',textAlign:'left',paddingLeft:'0.5rem'}}>
                <Row style={{paddingBottom:'0.2rem'}}>
                    <Col xs={{span:8}}
                         sm={{span:8}}
                         md={{span:8}}
                         lg={{span:8}}
                         xl={{span:8}}>
                        <ul>
                            <li  style={{fontWeight:'bold',fontSize:'1.0rem'}}>快速入口</li>
                            <li ><CustomLink path="/" content="首页" ></CustomLink></li>
                            <li ><CustomLink path="/multicenter"   content="多中心" ></CustomLink></li>
                            <li ><CustomLink path="/managecenter"   content="管理中心" ></CustomLink></li>
                        </ul>
                    </Col>
                    <Col xs={{span:7}}
                         sm={{span:8}}
                         md={{span:8}}
                         lg={{span:8}}
                         xl={{span:8}}>
                        <ul>
                            <li style={{fontWeight:'bold',fontSize:'1.0rem'}}>云平台咨询</li>
                            <li ><CustomLink path="/"  content="常见问题FAQ" ></CustomLink></li>
                        </ul>
                    </Col>
                    <Col xs={{span:9}}
                         sm={{span:8}}
                         md={{span:8}}
                         lg={{span:8}}
                         xl={{span:8}}>
                        <ul>
                            <li style={{fontWeight:'bold',fontSize:'1.0rem'}}>联系我们</li>
                            <li>地址：上海市XXXXXXXX科技园
                                XXX路XXX号X栋X室</li>
                            <li>电话：021-XXXXXX XXXXXY</li>
                            <li>传真：021-XXX1111</li>
                            <li>E-mail：info@XXXXX.com</li>
                            <li>http://www.XXXXXX.com</li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{borderTop:'1px dotted #000',paddingTop:'0.5rem'}}>
                    <Col xs={{span:10}}
                         sm={{span:8}}
                         md={{span:8}}
                         lg={{span:7,offset:1}}
                         xl={{span:7,offset:1}}>
                        <ul>
                            <li>上海XXXX科技有限公司</li>
                            <li>Copyright © 2012-2017 Shanghai XY Medical Inc. All Rights Reserved</li>
                        </ul></Col>
                    <Col  xs={{span:8,offset:6}}
                          sm={{span:3,offset:13}}
                          md={{span:3,offset:13}}
                          lg={{span:2,offset:14}}
                          xl={{span:2,offset:14}}>
                        <img src={innoLogo} alt="" style={{height:'3.5rem',width:'8rem'}}/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Footer;