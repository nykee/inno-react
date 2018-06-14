import React from 'react';
import QuickOverview from './QuickOverview/QuickOverview'
import CloudInfra from './CloudInfra/CloudInfra'
import UserExperience from './UserExperience/UserExperience'
import ApplicationHealth from './ApplicationHealth/ApplicationHealth'
import {Row,Col} from 'antd'

import '../../../style/ServerDashboard/ServerDashboard.css'

class ServerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        //style={{padding:'.8rem',color:'#fff',marginLeft:0,marginRight:0}}
        return (
            <Row className="serverDash-container"
                 gutter={15}
                 id="serverDash"
            >
                <Col
                    xs={{span:24}}
                    sm={{span:24}}
                    md={{span:24}}
                    lg={{span:6}}
                    xl={{span:6}}
                >
                    <QuickOverview/>
                </Col>
                <Col
                    xs={{span:24}}
                    sm={{span:24}}
                    md={{span:24}}
                    lg={{span:6}}
                    xl={{span:6}}

                >
                    <CloudInfra/>
                </Col>
                <Col
                    xs={{span:24}}
                    sm={{span:24}}
                    md={{span:24}}
                    lg={{span:6}}
                    xl={{span:6}}

                >
                    <UserExperience/>
                </Col>
                <Col
                    xs={{span:24}}
                    sm={{span:24}}
                    md={{span:24}}
                    lg={{span:6}}
                    xl={{span:6}}

                >
                    <ApplicationHealth/>
                </Col>
            </Row>

        )
    }
}

export default ServerDashboard;