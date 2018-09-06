import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import PieChart from '../../../componenets/Echarts/PieChart'
import PlatDetail from './PlatDetail'
import {PieConfig} from '../../../chartConfig/pieConifg'
import {Row,Col} from 'antd'
import BarLineCombine from "./AreaSummary";

class PlatformSummary extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentWillMount(){
    }
    componentDidMount() {
    }

    render() {

        let config =new PieConfig();
        config.pieChartOption.legend.data =[
            {name:'天猫',icon:'rect',textStyle:{color:'#fff'}},
            {name:'京东',icon:'rect',textStyle:{color:'#fff'}},
            {name:'一号店',icon:'rect',textStyle:{color:'#fff'}},
            {name:'淘宝',icon:'rect',textStyle:{color:'#fff'}},
            {name:'亚马逊',icon:'rect',textStyle:{color:'#fff'}}
        ];
        config.pieChartOption.title.textStyle={
            //文字颜色
            color:'#FFB95A',
            //字体风格,'normal','italic','oblique'
            fontStyle:'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight:'bold',
            //字体系列
            fontFamily:'sans-serif',
            //字体大小
            fontSize:18
        };
        // console.log(config.pieChartOption.legend);
        config.pieChartOption.series[0].data =[{value:335, name:'天猫'},
            {value:310, name:'京东'},
            {value:234, name:'一号店'},
            {value:135, name:'淘宝'},
            {value:1548, name:'亚马逊'}];
        config.pieChartOption.toolbox.show=false;
        config.pieChartOption.title.text ='';
        config.pieChartOption.series[0].name= '各平台运单分布';
        config.pieChartOption.tooltip.show =false;
        config.pieChartOption.series[0].itemStyle.normal.label.show =
            config.pieChartOption.series[0].itemStyle.normal.labelLine.show=false;


        return (
            <div>
                <CommonTitle titleName="各平台运单统计"/>
                <Row>
                    <Col lg={{span:10}} xs={{span:24}}>
                        <PieChart chartID="PlatSummary" chartOption={config.pieChartOption}/>
                    </Col>
                    <Col lg={{span:14}} xs={{span:24}}>
                        <PlatDetail/>
                    </Col>
                </Row>
                <Row>
                    <BarLineCombine/>
                </Row>

            </div>

        )
    }
}

export default PlatformSummary;