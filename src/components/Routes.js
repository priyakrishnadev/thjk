import React from 'react'
import {Route,Switch} from 'react-router-dom';
import App from './App';
import logInForm from './logInForm';
import SignupForm from './SignupForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';
import {SmartView} from './SmartView';
import ProductInformation from './ProductInformation';
 import WebVR from './WebVR';
import requireAuth from '../utils/requireAuth';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={logInForm}/>
      <Route path="/admindashboard" component={requireAuth(App)}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <Route path="/resetpassword" component={ResetPassword}/>
      <Route path="/WebVR" component={WebVR}/>
      <Route path="/SmartView/:page?/:pageId?" component={SmartView}/>
      <Route path="/ProductInformation" component={ProductInformation}/>
      <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;
