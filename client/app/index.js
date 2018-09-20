import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import GoogleSearchApi from './components/GoogleSearchApi';
import NotFound from './components/NotFound';

const Child = ({ match }) => (
  <GoogleSearchApi searchkeyword={match.params.q} />
);

render(<Router>
         <Switch>
            <Route exact path="/" component={Child} />
            <Route path="/search/:q" component={Child} />
            <Route component={NotFound}/>
         </Switch>
       </Router>
       , document.getElementById('app'));
