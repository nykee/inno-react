import React from 'react';
import { Carousel,Row,Col,Button } from 'antd';
import ServiceNameComponent from '../componenets/ServiceNameComponent'
import MapChartIndex from '../componenets/Echarts/MapChartIndex'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Carousel effect="fade" autoplay>
                        <div><h2>轮播1</h2></div>
                        <div><h2>轮播2</h2></div>
                        <div><h2>轮播3</h2></div>
                        <div><h2>轮播4</h2></div>
                    </Carousel>


                </Row>
                <Row  type="flex" justify="start">
                    <Col  span={10} offset={7}>
                        <h3>逸动云平台--安全、稳定的云平台</h3>
                        <span>依托逸动多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让骨科诊疗更快速有效</span>
                    </Col>
                </Row>
                <Row>
                    云计算、云存储、神经网络介绍
                </Row>
                <Row>
                    {/*服务介绍*/}
                    <Col  span={10} offset={7}>精确定位，发散市场，逸动云能为各种类型的市场提供服务</Col>
                    <Row>
                        <Col span={8} >
                            <ServiceNameComponent sName="科研评估" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                        </Col>
                        <Col  span={8}>
                            <ServiceNameComponent sName="关节康复" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                        </Col>
                        <Col span={8} >
                            <ServiceNameComponent sName="门诊辅助" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                        </Col>
                    </Row>
                   <Row>
                       <Col  span={8}>
                           <ServiceNameComponent sName="运动训练" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                       </Col>
                       <Col span={8} >
                           <ServiceNameComponent sName="军事训练" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                       </Col>

                       <Col  span={8}>

                           <ServiceNameComponent sName="体检项目" cName="fa fa-envelope fa-4x"></ServiceNameComponent>
                       </Col>
                   </Row>

                </Row>

                <Row style={{backgroundColor:'#F2F3F3'}}>
                    {/*mapChart*/}
                    <Col span={6} offset={9}><h3>逸动云分布全国的骨科中心--数据更可靠</h3></Col>
                    <Col span={14} offset={5}><MapChartIndex></MapChartIndex></Col>


                </Row>
                <Row type="flex" justify="center" >
                    {/*ButtonCol*/}
                    <Col span={2}><Button type="primary">查看逸动多中心</Button></Col>
                    <Col span={2}><Button type="primary">立刻登录</Button></Col>
                </Row>

            </div>

        )
    }

}

export default Index;