import React from 'react';
import {Button } from 'antd'
class LoginBtn extends React.Component {
    constructor(){
        super();
        this.state ={
            hover:false
        };
        this.normalBtnStyle ={
            backgroundColor:'transparent',
            color:'#fff',
            height:'2rem',
            fontSize:'1rem',
            marginTop:'5%',
            border:'1px solid #fff'
        };
        this.activeBtnStyle ={
            color:'#00C1DE',
            backgroundColor:'#fff',
            height:'2rem',
            fontSize:'1rem',
            border:'transparent',
            marginTop:'5%',
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
        return (
            <Button  onMouseEnter={this.onMouserEnter}
                     onMouseLeave={this.onMouseLeave}
                     style={this.state.hover?this.activeBtnStyle:this.normalBtnStyle}
            >
                登录
            </Button>

        )
    }
}

export default LoginBtn;