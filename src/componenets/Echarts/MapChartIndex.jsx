import React from 'react';
import echarts from 'echarts'
import 'echarts/chart/map'

class MapChartIndex extends React.Component {
    componentDidMount() {
        let  myChart = echarts.init(document.getElementById('mapChart'));
        myChart.setOption({
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
                        // height: 600
                    },


                    selectedMode: false,
                    itemStyle: {
                        normal: {
                            // borderWidth: 2,
                            // borderColor: '#025192',
                            color: '#003156',
                            label: {
                                show: false
                            }
                        },

                    },
                    data: [




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
                            scaleSize : 2,
                            bounceDistance: 10,
                            color :'#00c1de',
                            shadowColor : null,
                            shadowBlur : 0

                        },
                        data: [
                            {
                                name: '北京',

                            },
                            {
                                name: '上海',

                            },
                            {
                                name:'广州',

                            },
                            {
                                name:'合肥',

                            },
                            {
                                name:'武汉',

                            },
                            {
                                name:'长沙',

                            },
                            {
                                name:'贵阳',

                            },
                            {
                                name:'成都',

                            },
                            {
                                name:'长春',

                            },
                            {
                                name:'济南',

                            }
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

        })
    }


    render() {
        return (
            <div id="mapChart" style={{height:400}}></div>

        )
    }
}

export default MapChartIndex;