import React from 'react';
import {Row,Col} from 'antd'
import '../../style/ECharts/CustomLegend.css'
import ep from '../../utils/eventProxy';
class CustomLegend extends React.Component {
    constructor() {
        super();
        this.state = {
            legendColor:''
        };
    }

    componentDidMount() {
        console.log(this.props.legendOption.items);
        ep.on('changeLegendColor',function (v) {
            console.log('pieHover');
        })

    }

    render() {
        let legendElement=[];
            for(let item of this.props.legendOption.items){
                item.name ==="New Customers"?(item.value='+'+item.value+'%'):(item.value='-'+item.value+'%');
                legendElement.push (
                    <Row>
                        <Col span={5}>
                            <span className="legendBox"  style={{background:item.color}}/>
                        </Col>
                        <Col span={10} >
                            <b className="itemName">{item.name}</b>
                        </Col>
                        <Col span={5} offset={4}>
                            <span className="itemValue" >{item.value}</span>
                        </Col>
                    </Row>

                )
            }

        console.log(legendElement);
        return(
            <div>
                {legendElement}
            </div>
        )

    }
}

export default CustomLegend;