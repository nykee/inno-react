import React from 'react';
import {Col, Row, Select} from "antd";
import CommonHeader from "../CommonHeader";
import echarts from 'echarts'
import 'echarts/chart/map'
const Option = Select.Option;



class UserExperienceIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'SH'
        };
    }

    componentDidMount() {
        let  myChart = echarts.init(document.getElementById('UEI-map'));
        myChart.setOption({
            /*地图用到的数据，Object形式*/
            series: [
                {
                    name: 'Map',
                    type: 'map',
                    // roam: true,//鼠标滚轮缩放
                    // hoverable:true,//鼠标经过高亮
                    mapLocation: {
                        x: 'left',
                        y: 'top',
                        height: 600
                    },


                    selectedMode: 'single',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#025192',
                            color: '#003156',
                            label: {
                                show: false
                            }
                        },
                        emphasis: { // 选中样式
                            borderWidth: 2,
                            borderColor: '#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data: [
                        {
                            name: '广东',
                            itemStyle: {
                                normal: {
                                    color: '#2F99E5',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 15
                                        }
                                    }
                                },
                                emphasis: { // 选中样式
                                    borderWidth: 2,
                                    borderColor: '#fff',
                                    color: '#32cd32',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '上海',
                            itemStyle: {
                                normal: {
                                    color: '#2F99E5',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 12
                                        }
                                    }
                                },
                                emphasis: { // 选中样式
                                    borderWidth: 2,
                                    borderColor: '#fff',
                                    color: '#32cd32',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '北京',
                            itemStyle: {
                                normal: {
                                    color: '#2F99E5',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 12
                                        }
                                    }
                                },
                                emphasis: { // 也是选中样式
                                    borderWidth: 2,
                                    borderColor: '#fff',
                                    color: '#32cd32',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        },

                    ],
                    /*地图标注点*/
                    markPoint: {
                        itemStyle: {
                            normal: {
                                color: '#00c1de'
                            }
                        },
                        effect:{
                            show: false,
                            type: 'scale',
                            loop: true,
                            period: 15,
                            scaleSize : 2,
                            bounceDistance: 10,
                            color : null,
                            shadowColor : null,
                            shadowBlur : 0

                        },
                        data: [
                            {
                                name: '北京',
                                value: 1
                            },
                            {
                                name: '上海',
                                value: 2
                            },
                            {
                                name:'广州',
                                value:3
                            },
                            {
                                name:'合肥',
                                value:4
                            },
                            {
                                name:'武汉',
                                value:5
                            },
                            {
                                name:'长沙',
                                value:6
                            },
                            {
                                name:'贵阳',
                                value:7
                            },
                            {
                                name:'成都',
                                value:8
                            },
                            {
                                name:'长春',
                                value:9
                            },
                            {
                                name:'济南',
                                value:10
                            }
                        ],
                    },
                    /*地图标注线*/
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],
                        symbolSize : 1,
                        effect : {
                            show: false,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:2,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'上海'}],
                            [{name:'北京'},{name:'贵阳'}],
                            [{name:'北京'},{name:'广州'}],
                            [{name:'北京'},{name:'长沙'}],
                            [{name:'北京'},{name:'成都'}],
                            [{name:'北京'},{name:'合肥'}],
                            [{name:'北京'},{name:'长春'}],
                            [{name:'北京'},{name:'济南'}],
                            [{name:'北京'},{name:'武汉'}],

                            [{name:'上海'},{name:'北京'}],
                            [{name:'上海'},{name:'贵阳'}],
                            [{name:'上海'},{name:'广州'}],
                            [{name:'上海'},{name:'长沙'}],
                            [{name:'上海'},{name:'成都'}],
                            [{name:'上海'},{name:'合肥'}],
                            [{name:'上海'},{name:'长春'}],
                            [{name:'上海'},{name:'济南'}],
                            [{name:'上海'},{name:'武汉'}],

                            [{name:'广州'},{name:'北京'}],
                            [{name:'广州'},{name:'贵阳'}],
                            [{name:'广州'},{name:'上海'}],
                            [{name:'广州'},{name:'长沙'}],
                            [{name:'广州'},{name:'成都'}],
                            [{name:'广州'},{name:'合肥'}],
                            [{name:'广州'},{name:'长春'}],
                            [{name:'广州'},{name:'济南'}],
                            [{name:'广州'},{name:'武汉'}],
                        ],
                    },

                    /*用到的城市的经纬度坐标geoCoord*/
                    geoCoord: {
                        '上海': [121.4648, 31.2891],
                        '北京':[116.46, 39.92],
                        '广州':[113.27, 23.13],
                        '合肥':[117.27,31.86],
                        '武汉':[114.31,30.52],
                        '长沙':[113.00,28.21],
                        '贵阳':[106.71,26.57],
                        '成都':[104.07,30.67],
                        '长春':[125.35,43.88],
                        '济南':[116.98,36.67]
                    }
                }
            ]

        });

    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            selected:value
        })
    }

    render() {
        return (
            <div className="box-container" style={{marginBottom:'.5rem'}}>
                <CommonHeader title="USER EXPERIENCE INDEX" titleSpan={14} lineSpan={10}/>
                <Row className="box-body">
                    <Col span={24}>
                        <Select defaultValue="SH"
                                style={{width:'90%'}}
                                onChange={this.handleChange.bind(this)}
                               >
                            <Option value="SH">上海</Option>
                            <Option value="BJ">北京</Option>
                            <Option value="GZ">广州</Option>
                        </Select>
                    </Col>
                    <div>
                        <div id="UEI-map" style={{height:'16rem'}}/>
                    </div>
                </Row>

            </div>

        )
    }
}

export default UserExperienceIndex;