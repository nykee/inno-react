import React from 'react';

class ServiceNameComponent extends React.Component {
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
        let normalImgStyle ={
            verticalAlign:'middle',width:'3.1rem',height:'3.1rem'
        };
        let hoverImgStyle ={
            verticalAlign:'middle',width:'3.1rem',height:'3.1rem',
            cursor:'pointer',
          webkitTransform:'rotateY(360deg)',
            mozTransform:'rotateY(360deg)',
            webkitTransition:'all 1s ease-in-out',
            MozTransition:'all 1s ease-in-out'
        };
        let normalLiStyle={
            fontSize:'1.2rem',fontWeight:'bold',marginTop:'0.5rem'
        };
        let hoverKLiStyle={
            fontSize:'1.2rem',fontWeight:'bold',marginTop:'0.5rem',color:'#00c1de',cursor:'pointer'
        };
        return (
            <ul style={{marginTop:'1rem'}} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouserEnter}>
                <li><img  src={this.props.imgSrc} alt="" style={this.state.hover?hoverImgStyle:normalImgStyle}/></li>
                <li  style={this.state.hover?hoverKLiStyle:normalLiStyle}>{this.props.sName}</li>
            </ul>

        )
    }
}

export default ServiceNameComponent;