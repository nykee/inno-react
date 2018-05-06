import React from 'react';
import BarChart from '../../../componenets/Echarts/BarChart'
import '../../../style/SaleDashboard/common.css'
import {Row,Col} from 'antd'
import ep from '../../../utils/eventProxy'
class AmountCount extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'pending'
        };


    }
    componentWillMount(){
        this.setState({
            SData:[1200,857,3300,720,3900,1221,590]
        })
    }

    getChartData(type){
        let ajaxData=[];
        if(type ==="Pending"){
            // console.log('pending');
            this.setState({
                selected:'pending'
            });
            ajaxData =[1200,857,3300,720,3900,1221,590];
            ep.trigger('AmountSelectionChange','Pending',ajaxData);

        }
        else if(type ==="Completed"){
            // console.log('Completed');
            this.setState({
                selected:'completed'
            });
            ajaxData =[700,527,3700,620,4100,221,190];
            ep.trigger('AmountSelectionChange','Completed',ajaxData);
            // this.setState({
            //     ajaxData:ajaxData
            // });
        }
        else if(type ==="Refounded"){
            // console.log('Refounded');
            this.setState({
                selected:'refounded'
            });
            ajaxData =[850,897,2200,1280,880,3221,790];
            ep.trigger('AmountSelectionChange','Refounded',ajaxData);
        }

        // this.chartOption.series[0].data =ajaxData;
        //  console.log( this.chartOption);

    }
    render() {
         let chartOption= {
        grid: {
            borderWidth: 0,
                x:30,
                y:30,
                x2:25,
                y2:25,
        },

        xAxis: [
            {
                type: 'category',
                splitLine:{show: false},//去除网格线
                show: true,
                axisLabel: {textStyle: {
                        color:'#A6AEBF'
                    }},
                axisLine:{
                    lineStyle:{
                        color:'transparent'
                    },
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
            yAxis: [
            {
                type: 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {textStyle: {
                        color:'#A6AEBF',
                        /*formatter:function (v) {
                            console.log("Yaxis formatter");
                            console.log(v);
                        }*/
                    },
                    formatter:function (v) {
                        v/1000>=1? v=(v/1000)+'k':'';
                        // console.log(v);
                        return '$ '+v
                    }},
                axisLine:{
                    lineStyle:{
                        color:'transparent'
                    },
                },
                show: true
            }
        ],
            series: [
            {
                name: 'ECharts例子个数统计',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF',
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },
                // data: [1200,857,3300,720,3900,1221,590],
                data: this.state.SData
            }
        ]
    };
        // console.log( this.chartOption.series[0].data);
        return (
            <div>
                <Row >
                    <Col span={4} offset={2}><span className={this.state.selected==="pending"?'title-selected':'title'}  onClick={this.getChartData.bind(this,'Pending')}>Pending</span></Col>
                    <Col span={6}><span className={this.state.selected==="completed"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Completed')}>Completed</span></Col>
                    <Col span={6}><span className={this.state.selected==="refounded"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Refounded')}>Refounded</span></Col>
                    <Col span={4} offset={2}><i className="fa fa-edit fa-2x"/></Col>
                </Row>

                <BarChart chartOption={chartOption} />
            </div>

        )
    }
}

export default AmountCount;