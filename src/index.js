import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import Index from '../src/pages/Index'
import MultipleCenter from './pages/MultipleCenter/MultipleCenter'
import ManageCenter from './pages/ManageCenter/ManageCenter'
import Hospital from '../src/pages/Hospital'
import Login from '../src/pages/Login'
import Container from '../src/componenets/Container'
import { Router, Route,  browserHistory,IndexRoute  } from 'react-router';
import registerServiceWorker from './registerServiceWorker';


const routes =
    <Route path={'/'} components={Container}>
        <Route path={''} components={App}>
            <IndexRoute component={Index} />
            <Route path="multicenter" component={MultipleCenter}>
            </Route>
            <Route path="managecenter" component={ManageCenter}>
            </Route>
            <Route path="hospital" component={Hospital}>
            </Route>
        </Route>


        <Route path="login" component={Login}>
        </Route>



    </Route>
;

ReactDOM.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
