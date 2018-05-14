import React from 'react';
import {Row,Col} from 'antd'
import ep from '../../../utils/eventProxy';
class CustomLegendItems extends React.Component {
    constructor() {
        super();
        this.state = {
            hoverItem:''
        };
    }

    componentWillMount() {
        // let item= this.props.item;
        // console.log(item);
        let self = this;
        // console.log(this.props.isHover);
        ep.on('pieHover',function (event) {
            // console.log(event);
            self.setState({
                hoverItem:event
            })

        })
    }

    render() {
        let item= this.props.item;
        let hoverColor='';
        if(this.state.hoverItem ==="Sales"){
            hoverColor='#49B9E3'
        }
        else if(this.state.hoverItem ==="New Customers"){
            hoverColor='#B29EFF'
        }
        else if(this.state.hoverItem ==="Refound"){
            hoverColor='#3394E7'
        }
        // console.log(item.name);
        // console.log(this.state.hoverItem);

        return (
            <Row >
                <Col span={5}  style={{textAlign:'left'}}>
                    <span  className="legendBox" style={{background:(hoverColor.length>0&&item.name===this.state.hoverItem)?hoverColor:item.color}} />
                </Col>
                <Col span={10}  style={{textAlign:'left'}}>
                    <b className="itemName" style={{color:(hoverColor.length>0&&item.name===this.state.hoverItem)?hoverColor:item.color}}>{item.name}</b>
                </Col>
                <Col span={5} offset={4} style={{textAlign:'left'}}>
                    <span className="itemValue" >{item.id ==="1"?"+"+item.value+'%':"-"+item.value+'%'}</span>
                </Col>
            </Row>

        )
    }
}

export default CustomLegendItems;