import React from 'react';
import PieChart from "../../../componenets/Echarts/PieChart";
import commonDPieOption from '../../../chartConfig/commonEchartsConifg'

class AllSummaryPie extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let ChartOption = commonDPieOption;

        return (
            <div>
                <PieChart chartID="allSummary" chartOption={ChartOption}/>
            </div>

        )
    }
}

export default AllSummaryPie;