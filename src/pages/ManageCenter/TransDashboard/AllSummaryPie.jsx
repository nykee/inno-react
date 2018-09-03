import React from 'react';
import PieChart from "../../../componenets/Echarts/PieChart";

class AllSummaryPie extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let dataFormatter=function (params) {
            return params.data.value
        };
        var labelTop = {
            normal : {
                color:'#F5AE46',
                label : {
                    show : true,
                    position : 'center',
                    formatter : dataFormatter,
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };

        var labelBottom = {
            normal : {
                color: '#1F242A',
                label : {
                    show : false,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];


        let ChartOption={
            series : [
                {
                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : radius,
                    x: '0%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:550, itemStyle : labelBottom},
                        {name:'HTC', value:4550,itemStyle : labelTop}
                    ]
                },

            ]
        };
        return (
            <div>
                <PieChart chartID="allSummary" chartOption={ChartOption}/>
            </div>

        )
    }
}

export default AllSummaryPie;