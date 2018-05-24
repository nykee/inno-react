import React from 'react';
import {Row,Col} from 'antd'

import ProductListsItems from './ProductListsItems'


class ProductLists extends React.Component {


    render() {
        let dataFormatter=function (params) {
            params.data.value =(params.data.value/1000>1)? ((params.data.value/1000)+'K'):params.data.value;
            return params.data.value+'\n'+"QTY"
        };
        var labelTop = {
            normal : {
                color:'#1DA1D3',
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
        // var lableTop_2 =labelTop;
        // console.log(lableTop_2.normal.color);
        // lableTop_2.normal.color ="#0475D5";
        // console.log(lableTop_2.normal.color);
        /*var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        console.log(params.data);
                        return params.value
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }*/

        var labelBottom = {
            normal : {
                color: '#2F323A',
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


        let htcOption ={
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
        let nokiaOption={
            series : [
                {
                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : radius,
                    x:'20%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:320, itemStyle : labelBottom},
                        {name:'Nokia', value:657,itemStyle : {
                                normal : {
                                    color:'#0375D6',
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
                            }}
                    ]
                }

            ]
        };
        let lgOption={
            series : [
                {
                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : radius,
                    x:'40%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:330, itemStyle : labelBottom},
                        {name:'LG', value:1200,itemStyle : {
                                normal : {
                                    color:'#9981F4',
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
                            }}
                    ]
                },

            ]
        };
        let samsungOption={
            series : [
                {
                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : radius,
                    x:'60%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:440, itemStyle : labelBottom},
                        {name:'Samsung', value:1800,itemStyle : {
                                normal : {
                                    color:'#5433DB',
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
                            }}
                    ]
                },

            ]
        };
        let appleOption={
            series : [
                {
                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : radius,
                    x:'80%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:230, itemStyle : labelBottom},
                        {name:'Apple', value:2400,itemStyle : {
                                normal : {
                                    color:'#0376D7',
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
                            }}
                    ]
                },

            ]
        };

        return (
            <div>
                <Row>
                    <Col xs={{span:24}}
                        sm={{span:24}}
                         md={{span:24}}
                        lg={{span:4}}
                        xl={{span:4}}
                    >
                        <ProductListsItems name="HTC" qty="450" chartOption={htcOption} charID="HTC"/>
                    </Col>
                    <Col xs={{span:24}}
                        sm={{span:24}}
                         md={{span:24}}
                        lg={{span:4,offset:1}}
                        xl={{span:4,offset:1}} >
                        <ProductListsItems name="Nokia" qty="657" chartOption={nokiaOption} charID="Nokia"/>
                    </Col>
                    <Col xs={{span:24}}
                        sm={{span:24}}
                         md={{span:24}}
                        lg={{span:4,offset:1}}
                        xl={{span:4,offset:1}} >
                        <ProductListsItems name="LG" qty="1200" chartOption={lgOption} charID="LG"/>
                    </Col>
                    <Col xs={{span:24}}
                        sm={{span:24}}
                         md={{span:24}}
                        lg={{span:4,offset:1}}
                        xl={{span:4,offset:1}} >
                        <ProductListsItems name="Samsung" qty="1800" chartOption={samsungOption} charID="Samsung"/>
                    </Col>
                    <Col xs={{span:24}}
                        sm={{span:24}}
                         md={{span:24}}
                        lg={{span:4,offset:1}}
                        xl={{span:4,offset:1}}>
                        <ProductListsItems name="Apple" qty="2400" chartOption={appleOption} charID="Apple"/>
                    </Col>
                </Row>
                <Row>
                    {/*<PieChart chartOption={chartOption} />*/}
                </Row>
            </div>


        )
    }
}

export default ProductLists;