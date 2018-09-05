import React from 'react';
import PieChart from "../../../componenets/Echarts/PieChart";
import {dPieConfig} from '../../../chartConfig/dPieConfig'

class AllSummaryPie extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount(){

    }
    componentDidMount() {
    }

    render() {
        let config =new dPieConfig();
        config.seriesData_1.value =220;
        config.seriesData_2.value =3330;
        config.seriesData_2.itemStyle.normal.label.textStyle.color = '#F5AE46';
        config.seriesData_2.itemStyle.normal.label.textStyle.fontSize = 18;
        config.dpeiconfig.title= {
            text: '总运单',
                x:'center',
            textStyle:{
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
            }
        };

        return (
            <div>
                <PieChart chartID="allSummary" chartOption={config.dpeiconfig}/>
            </div>

        )
    }
}

export default AllSummaryPie;