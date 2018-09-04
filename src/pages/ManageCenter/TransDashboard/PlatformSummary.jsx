import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import PieChart from '../../../componenets/Echarts/PieChart'
import PlatDetail from './PlatDetail'
import {pieChartOption} from '../../../chartConfig/pieConifg'
import {Row,Col} from 'antd'
import deepCopy from "../../../utils/deepCopy";

class PlatformSummary extends React.Component {
    constructor() {
        super();
        console.log(pieChartOption);
        let config2 =deepCopy(pieChartOption); config2.legend.data =['天猫','京东','一号店','淘宝','亚马逊'];
        config2.series[0].data =[{value:335, name:'天猫'},
            {value:310, name:'京东'},
            {value:234, name:'一号店'},
            {value:135, name:'淘宝'},
            {value:1548, name:'亚马逊'}];
        config2.toolbox.show=false;
        config2.title.text ='';
        config2.series[0].name= '各平台运单分布';
        config2.tooltip.show =false;

        this.state = {
            myConfig:config2
        };
    }
    componentWillMount(){

       /* let config2  =deepCopy(pieChartOption);
        this.setState({
            myConfig:config2
        })*/
    }
    componentDidMount() {

    }

    render() {
       /* let config2 =deepCopy(pieChartOption);

        // let chartOption=pieChartOption;
        config2.legend.data =['天猫','京东','一号店','淘宝','亚马逊'];
        config2.series[0].data =[{value:335, name:'天猫'},
            {value:310, name:'京东'},
            {value:234, name:'一号店'},
            {value:135, name:'淘宝'},
            {value:1548, name:'亚马逊'}];
        config2.toolbox.show=false;
        config2.title.text ='';
        config2.series[0].name= '各平台运单分布';
        config2.tooltip.show =false;
        console.log("PLATSUMMARY CONFIG");
       console.log(config2);*/

        return (
            <div>
                <CommonTitle titleName="各平台运单统计"/>
                <Row>
                    <Col lg={{span:10}}>
                        <PieChart chartID="PlatSummary" chartOption={this.state.myConfig}/>
                    </Col>
                    <Col lg={{span:14}}>
                        <PlatDetail/>
                    </Col>
                </Row>
                <Row>
                    <span style={{color:'#fff',height:'12.5rem',display:'inline-block'}}>Bar LINE 混合图</span>
                </Row>

            </div>

        )
    }
}

export default PlatformSummary;