import React from 'react';
import '../../style/common/CommonTitle.css'
class CommonTitle extends React.Component {


    render() {


        return (
            <h4 className="common-title">
                {this.props.titleName}
            </h4>

        )
    }
}

export default CommonTitle;