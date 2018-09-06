import React from 'react';
import BarLine from "../../../componenets/Echarts/BarLine";
import {barlineConfig} from "../../../chartConfig/barlineConfig";

class BarLineCombine extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

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
        config.barlineConfig.yAxis[0].name ="总运单量";
        config.barlineConfig.yAxis[1].name ="待运单量";
        config.barlineConfig.series[0].name ="总运单量";
        config.barlineConfig.series[1].name ="待运单量";
        config.barlineConfig.toolbox.show = false;
        config.barlineConfig.grid = {show: true, borderWidth: '0'};
        config.barlineConfig.legend.data =
            [{name: "总运单量", textStyle: {color: '#fff'}}, {name: "待运单量", textStyle: {color: '#fff'}}];
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
                <BarLine chartID="barLineCombine" chartOption={config.barlineConfig}/>
            </div>

        )
    }
}

export default BarLineCombine;