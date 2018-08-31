import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import PieChart from '../../../componenets/Echarts/PieChart'
import {pieChartOption} from '../../../chartConfig/commonEchartsConifg'
import {Row,Col} from 'antd'

class PlatformSummary extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount(){
        pieChartOption.legend.data =['天猫','京东','一号店','淘宝','亚马逊'];
        pieChartOption.series[0].data =[{value:335, name:'天猫'},
            {value:310, name:'京东'},
            {value:234, name:'一号店'},
            {value:135, name:'淘宝'},
            {value:1548, name:'亚马逊'}];
        pieChartOption.toolbox.show=false;
        pieChartOption.title.text =pieChartOption.series[0].name= '各平台运单分布';

    }
    componentDidMount() {

    }

    render() {

        return (
            <div>
                <CommonTitle titleName="各平台运单统计"/>
                <Row>
                    <Col lg={{span:12}}>
                        <PieChart chartID="PlatSummary" chartOption={pieChartOption}/>
                    </Col>
                    <Col lg={{span:12}}>

                    </Col>
                </Row>

            </div>

        )
    }
}

export default PlatformSummary;