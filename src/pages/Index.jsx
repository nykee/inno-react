import React from 'react';
import { Carousel,Row,Col,Button} from 'antd';
import { Link } from 'react-router';
import ServiceNameComponent from '../componenets/ServiceNameComponent'
import MapChartIndex from '../componenets/Echarts/MapChartIndex'
import CustomButton from '../componenets/CustomButton'
import BG1 from '../assets/img/index/silde-banner3.jpg'
import BG2 from '../assets/img/index/silde-banner4.jpg'
import BG3 from '../assets/img/index/silde-banner5.jpg'
import kf from '../assets/img/index/kf.png';
import ky from '../assets/img/index/ky.png'
import tj from '../assets/img/index/tj.png'
import yd from '../assets/img/index/yd.png'
import mz from '../assets/img/index/mz.png'
import js from '../assets/img/index/js.png'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Carousel effect="fade" autoplay>
                            <div style={{position:'relative'}}>
                                <div style={{position:'absolute',bottom:'8%',left:'40%',color:'#fff '}}>
                                    <h2 style={{color:'#fff'}}>XY多中心</h2>
                                    <p>XY医学依托北上广及全国各地的多中心建立医疗、大数据！</p>
                                </div>
                                <img src={BG1} alt="" style={{maxWidth:'100%'}}/>
                                {/*<h2>轮播1</h2>*/}
                            </div>
                            <div style={{position:'relative'}}>
                                <div style={{position:'absolute',bottom:'8%',left:'40%',color:'#fff'}}>
                                    <h2 style={{color:'#fff'}}>XY大数据</h2>
                                    <p>建立医疗测试模型，数据分析更科学高效！</p>
                                </div>
                                <img src={BG2} alt="" style={{maxWidth:'100%'}}/>
                                {/*<h2>轮播2</h2>*/}
                            </div>
                            <div style={{position:'relative'}}>
                                <div style={{position:'absolute',bottom:'8%',left:'40%',color:'#fff'}}>
                                    <h2  style={{color:'#fff'}}>XY云计算</h2>
                                    <p>XY多中心上传的数据通过云计算处理大数据</p>
                                </div>
                                <img src={BG3} alt="" style={{maxWidth:'100%'}}/>
                                {/*<h2>轮播3</h2>*/}
                            </div>
                        </Carousel>
                    </Col>



                </Row>
                <Row  type="flex" justify="start" style={{marginTop:'1.5rem'}}>
                    <Col  span={10} offset={7}>
                        <h3>XY云平台--安全、稳定的云平台</h3>
                        <span>依托XY多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让医疗诊疗更快速有效</span>
                    </Col>
                </Row>
                <Row>
                    云计算、云存储、神经网络介绍
                </Row>
                <Row style={{marginTop:'.6rem'}}>
                    {/*服务介绍*/}
                    <Col  span={10} offset={7} style={{fontSize:'1.2rem',fontWeight:'bold',lineHeight:'1.3rem'}}>精确定位，发散市场，XY云能为各种类型的市场提供服务</Col>
                    <Row>
                        <Col span={8} >
                            <ServiceNameComponent sName="科研评估" imgSrc={ky}></ServiceNameComponent>
                        </Col>
                        <Col  span={8}>
                            <ServiceNameComponent sName="康复" imgSrc={kf}></ServiceNameComponent>
                        </Col>
                        <Col span={8} >
                            <ServiceNameComponent sName="门诊辅助" imgSrc={mz}></ServiceNameComponent>
                        </Col>
                    </Row>
                   <Row>
                       <Col  span={8}>
                           <ServiceNameComponent sName="运动训练" imgSrc={yd}></ServiceNameComponent>
                       </Col>
                       <Col span={8} >
                           <ServiceNameComponent sName="军事训练" imgSrc={js}></ServiceNameComponent>
                       </Col>

                       <Col  span={8}>

                           <ServiceNameComponent sName="体检项目" imgSrc={tj}></ServiceNameComponent>
                       </Col>
                   </Row>

                </Row>

                <Row style={{backgroundColor:'#F2F3F3',marginTop:'.6rem'}}>
                    {/*mapChart*/}
                    <Col span={6} offset={9}>
                        <h3>XY云分布全国的医疗中心--数据更可靠</h3>
                    </Col>
                    <Col span={14} offset={5}>
                        <MapChartIndex/>
                    </Col>


                </Row>
                <Row type="flex" justify="center"  style={{backgroundColor:'#00c1de',padding:"1rem 1rem"}} >
                    {/*ButtonCol*/}
                    <Col     xs={{span:12}}
                             sm={{span:12}}
                             md={{span:12}}
                             lg={{span:3}}
                             xl={{span:3}}><Link to="/multicenter"><CustomButton content="查看XY多中心"></CustomButton></Link></Col>
                    <Col     xs={{span:12}}
                             sm={{span:12}}
                             md={{span:12}}
                             lg={{span:3}}
                             xl={{span:3}}><Link to="/login"><CustomButton content="立刻登录"></CustomButton></Link></Col>
                </Row>

            </div>

        )
    }

}

export default Index;