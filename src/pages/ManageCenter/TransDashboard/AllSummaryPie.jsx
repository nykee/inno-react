import React from 'react';
import PieChart from "../../../componenets/Echarts/PieChart";
import {config,dpie_data2} from '../../../chartConfig/dPieConfig'

class AllSummaryPie extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount(){
        dpie_data2.value =3300;
        dpie_data2.itemStyle.normal .color ='#F5AE46';
        dpie_data2.itemStyle.normal .label.textStyle.color ='#F5AE46';
        config.title = {text:"总运单",x:'center',color:'#F5AE46'}


    }

    componentDidMount() {
        // console.log(config);

    }

    render() {
        // dpie_data1.value =3330;
        // dpie_data2.value =220;
        // let ChartOption = commonDPieOption;

        return (
            <div>
                <PieChart chartID="allSummary" chartOption={config}/>
            </div>

        )
    }
}

export default AllSummaryPie;