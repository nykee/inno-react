import React from 'react';
import DPie from '../../../componenets/Echarts/DPieChart'

class PercentCount extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let colorOption =function(params) {
            // build a color map as your need.
            var colorList = [
                '#9F86FF','#1CA8DD','#007AE1',

            ];
            return colorList[params.dataIndex]
        };

        let option={
           /* tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },*/
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                itemWidth:18,
                itemHeight:14,
                padding:0,
                textStyle:{color:'#8E95A4'},
                formatter:function () {

                },
                data:['New Customers','Sales','Refound']
            },
            /*toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'center',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
            calculable : false,
            series : [
                {
                    name:'',
                    type:'pie',
                    avoidLabelOverlap: false,
                    radius : ['50%', '70%'],
                    itemStyle : {
                        normal : {
                            color: colorOption,
                            label : {
                                show : false

                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {

                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '24',
                                    fontWeight : 'bold'
                                },
                                /*formatter:
                                    '{c}' +'%'+'\n'+'Avg'*/
                                formatter:function (params,ticket,callback) {
                                    let res='';
                                    // console.log(params);
                                   // console.log(params.data.name);
                                    if(params.data.name ==='New Customers'){
                                        res +='+'+params.data.value+'%'+'\n'+'Avg'

                                    }
                                    else {
                                        res +='-'+params.data.value+'%'+'\n'+'Avg'
                                    }
                                    // console.log(res);
                                    //callback貌似undefined，直接return res即可
                                    // console.log(callback);
                                    return res
                                }


                            }
                        }
                    },
                    data:[
                        {value:'15', name:'New Customers'},
                        {value:'20', name:'Sales'},
                        {value:'35', name:'Refound'},
                    ]
                }
            ]
        };

        return (
            <div>
                <DPie chartOption={option}/>
            </div>

        )
    }
}

export default PercentCount;