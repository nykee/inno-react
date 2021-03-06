import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import CommonMap from '../../../componenets/Echarts/CommonMap'
// import {Row,Col} from 'antd'
// import MapChartMcenter from '../../../componenets/Echarts/MapChartMcenter'

class RoadNetwork extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let chartOption ={
            /*地图用到的数据，Object形式*/
            series: [
                {
                    name: 'Map',
                    type: 'map',
                    // roam: true,//鼠标滚轮缩放
                    hoverable:false,//鼠标经过高亮
                    mapLocation: {
                        x: 'center',
                        y: 'center',
                        // height: 500
                    },


                    selectedMode: false,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#025192',
                            color: '#003156',
                            label: {
                                show: false
                            }
                        },
                    },
                    data: [
                        {
                            name: '',
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
                            }
                        },
                        {
                            name: '',
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

                            }
                        },
                        {
                            name: '',
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
                            show: true,
                            type: 'scale',
                            loop: true,
                            period: 15,
                            scaleSize : 3,
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

        };
        return (
            <div>
                        <CommonTitle titleName="全国公路路网概况"/>
                        <CommonMap DomID="RoadNetwork" chartOption={chartOption}/>
            </div>

        )
    }
}

export default RoadNetwork;