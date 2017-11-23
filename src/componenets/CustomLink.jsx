import React from 'react';
import {Link} from 'react-router'

class CustomLink extends React.Component {
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
    handleClickEvent(){
        console.log(this.props.path);
    }

    render() {
        let normalLinkStyle ={
            color:'#A0DEF4',
            textDecoration:'none'
        };
        let activeLinkStyle ={
            color:'#fff',
            cursor:'pointer',
            textDecoration:'none'
        };
        return (
            <Link to={this.props.path} onClick={this.handleClickEvent} onMouseEnter={this.onMouserEnter} onMouseLeave={this.onMouseLeave} style={this.state.hover?activeLinkStyle:normalLinkStyle}>{this.props.content}</Link>

        )
    }
}

export default CustomLink;