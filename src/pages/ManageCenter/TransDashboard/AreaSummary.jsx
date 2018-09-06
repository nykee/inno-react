import React from 'react';
import BarLine from "../../../componenets/Echarts/BarLine";
import {barlineConfig} from "../../../chartConfig/barlineConfig";
import EP from "../../../utils/eventProxy";
let Mock =require('mockjs');
class AreaSummary extends React.Component {
    constructor() {
        super();

        this. Sdata_1 =[];
        this.Sdata_2 =[];
        for(let i=0;i<12;i++){
            this.Sdata_1.push(
                Mock.mock(
                    {"number|10000-20000":20000}
                ).number
            );
            this.Sdata_2.push(
                Mock.mock(
                    {"number|1000-2000":2000}
                ).number
            )
        }

        this.state = {
            seriesData_1:this.Sdata_1,
            seriesData_2:this.Sdata_2

        };
    }

    componentDidMount() {
        let self =this;
        EP.on('PIE_CLICK',(d)=>{
            switch (d.name){
                case "亚马逊":
                    self.Sdata_1=[];
                    self.Sdata_2=[];
                    for(let i=0;i<12;i++){
                        this.Sdata_1.push(
                            Mock.mock(
                                {"number|10000-20000":20000}
                            ).number
                        );
                        this.Sdata_2.push(
                            Mock.mock(
                                {"number|1000-2000":2000}
                            ).number
                        )
                    }
                    self.setState({
                        seriesData_1:this.Sdata_1,
                        seriesData_2:this.Sdata_2
                    });
                    // self.$ref.setOption()

            }
        })

    }

    render() {
        let dataTextStyle = {
            fontSize: 12,
            color: '#fff'
        };
        let config = new barlineConfig();
        // config.barlineConfig.xAxis[0].show =false;
        config.barlineConfig.xAxis[0] = {

            type: 'category',
            axisLine: {show: false},
            axisLabel: {interval: 0, rotate: 40},
            data: [
                {value: '上海', textStyle: dataTextStyle},
                {value: '北京', textStyle: dataTextStyle},
                {value: '广州', textStyle: dataTextStyle},
                {value: '深圳', textStyle: dataTextStyle},
                {value: '杭州', textStyle: dataTextStyle},
                {value: '成都', textStyle: dataTextStyle},
                {value: '南京', textStyle: dataTextStyle},
                {value: '合肥', textStyle: dataTextStyle},
                {value: '青岛', textStyle: dataTextStyle},
                {value: '厦门', textStyle: dataTextStyle},
                {value: '哈尔滨', textStyle: dataTextStyle},
                {value: '乌鲁木齐', textStyle: dataTextStyle}
            ],
            splitLine: {show: false}
        };
        config.barlineConfig.yAxis[0].show = false;
        config.barlineConfig.yAxis[1].show = false;
        config.barlineConfig.yAxis[0].splitLine = {show: false};
        config.barlineConfig.yAxis[1].splitLine = {show: false};
        config.barlineConfig.yAxis[0].name ="月度运单量";
        config.barlineConfig.yAxis[1].name ="当日累计运单";
        config.barlineConfig.series[0].name ="月度运单量";
        config.barlineConfig.series[0].data =this.state.seriesData_1;
        config.barlineConfig.series[1].data =this.state.seriesData_2;
        config.barlineConfig.series[1].name ="当日累计运单量";
        config.barlineConfig.toolbox.show = false;
        config.barlineConfig.grid = {show: true, borderWidth: '0'};
        config.barlineConfig.legend.data =
            [{name: "月度运单量", textStyle: {color: '#fff'}}, {name: "当日累计运单量", textStyle: {color: '#fff'}}];
        config.barlineConfig.title={
            text:'各地区运单统计',
            x:'left',
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
                <BarLine ref="barLineChart" chartID="barLineCombine" chartOption={config.barlineConfig}/>
            </div>

        )
    }
}

export default AreaSummary;