import React from 'react';

class ServiceNameComponent extends React.Component {
    render() {
        return (
            <ul>
                <li><i className={String(this.props.cName)} style={{display:'inline-block',width:50,height:50}}></i></li>
                <li style={{fontSize:'1.2rem',fontWeight:'bold'}}>{this.props.sName}</li>
            </ul>

        )
    }
}

export default ServiceNameComponent;