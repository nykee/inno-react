var colorOption =function(params) {
    // build a color map as your need.
    var colorList = [
        '#C1232B','#334B5C','#6AB0B8','#E98F6F','#9FDABF',
        '#749F83','#DE9325','#CFB2A9','#797B7F','#5C6F7B',
        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    ];
    return colorList[params.dataIndex]
};
let pieChartOption ={
    title : {
        text: '按病种查看',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            saveAsImage: {show: true}
        }
    },
    legend: {
        orient: 'horizontal',
        x:'center',
        y:'bottom',
        itemWidth:25,
        itemHeight:14,
        padding:3,
        data:[],
    },
    series : [
        {
            name: '按病种查看',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [],
            stillShowZeroSum: false,
            selectedOffset: 50,
            legendHoverLink: true,
            /* selectedMode:'single',*/
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
                normal:{
                    color: colorOption,
                    label:{
                        show: true,
                    },
                    labelLine :{show:true}
                }
            },
        }

    ]
};



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


let commonDPieOption={
    series : [
        {
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            x: '0%', // for funnel
            // itemStyle : labelFromatter,
            data : [
                {name:'other', value:550, itemStyle : labelBottom},
                {name:'HTC', value:450,itemStyle : labelTop}
            ]
        },

    ]
};

export  {pieChartOption,commonDPieOption};