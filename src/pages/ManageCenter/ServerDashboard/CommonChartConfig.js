let commonChartConfig ={
    backgroundColor:'#303030',
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            type:'line'
        }

    },
    grid:{
        x:25,
        y:25,
        x2:25,
        y2:25,
        borderWidth:0
        // borderColor:'#2F323A'
    },
    calculable : false,
    xAxis : [
        {
            splitLine:{show: false},//去除网格线
            type : 'category',
            triggerEvent:true,
            boundaryGap : false,
            data : ['11:30','12:00','12:30','13:00'],
            axisLabel: {
                clickable:true,
                textStyle: {
                    color:'#A6AEBF',

                }},
            axisLine:{
                lineStyle:{
                    color:'transparent'
                },
            }

        }
    ],
    yAxis : [
        {
            splitLine:{
                show: false,
                lineStyle:{
                    color:'#3D4049',
                    width:1
                }},//Y轴显示网格线，并设置线条样式
            type : 'value',
            axisLabel: {
                show:false,
                textStyle: {
                    color:'#A6AEBF'
                }},
            axisLine:{
                lineStyle:{
                    color:'#3D4049',
                    width:1
                },
            }
        }
    ],
    series :[]
};
export default commonChartConfig;