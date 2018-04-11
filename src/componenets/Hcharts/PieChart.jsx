import React from 'react';
import Highcharts from 'highcharts'
import '../../style/HCharts/common.css'

class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

        let options ={
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            credits:{
                enabled: false // 禁用版权信息
            },
            title: {
                text: '2014 某网站各浏览器浏览量占比'
            },
            tooltip: {
                headerFormat: '{series.name}<br>',
                pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '浏览器访问量占比',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['其他',   0.7]
                ]
            }]
        };

        let chart  = Highcharts.chart('container-pie',options)

    }

    render() {
        return (
            <div id="container-pie" className="chart-container">

            </div>

        )
    }
}

export default PieChart;