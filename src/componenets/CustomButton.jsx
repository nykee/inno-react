import React from 'react';
import {Button } from 'antd'
class CustomButton extends React.Component {
    constructor(){
        super();
        this.state ={
            hover:false
        };
        this.onMouseLeave =this.onMouseLeave.bind(this);
        this.onMouserEnter =this.onMouserEnter.bind(this)

    }
    onMouserEnter(){
        this.setState({
            hover:true
        })
    }
    onMouseLeave(){
        this.setState({
            hover:false
        })
    }
    render() {
        let normalBtnStyle ={
            backgroundColor:'transparent',
            color:'#fff',
            height:'3rem',
            fontSize:'1rem',
            border:'1px solid #fff'
        };
        let activeBtnStyle ={
            color:'#00C1DE',
            backgroundColor:'#fff',
            height:'3rem',
            fontSize:'1rem',
            border:'transparent'
        };
        return (
            <Button  onMouseEnter={this.onMouserEnter}
                     onMouseLeave={this.onMouseLeave}
                     style={this.state.hover?activeBtnStyle:normalBtnStyle}
            >
                {this.props.content}
            </Button>

        )
    }
}

export default CustomButton;