import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "./App.scss"
import Landing from './components/CreatorSide/Landing/Landing';
import Idapplication from './components/CreatorSide/Idapplication/Idapplication';
import Startapplication from './components/CreatorSide/Startapplication/Startapplication';
import Yourproject from './components/CreatorSide/Yourproject/Yourproject';
import Details from './components/CreatorSide/Details/Details';
import Createlaunchpad from './components/Createlaunchpad/Createlaunchpad';
import Livechat from './components/CreatorSide/Livechat/Livechat';
import Userlanding from './components/UserSide/Landing/Userlanding';
import Legionlaunchpad from './components/Legionlaunchpad/Legionlaunchpad';
import Userpresaleflow from './components/UserSide/Userpresaleflow/Userpresaleflow';
import Mainprojectdetail from './components/UserSide/Mainprojectdetail/Mainprojectdetail';
import Userpresaleflow2 from './components/UserSide/Userpresaleflow2/Userpresaleflow2';
import Profileuser from './components/UserSide/Profileuser/Profileuser';




function App() {
  return (
    <>
      <Switch>
        <Route exact path="/idapplication" component={Idapplication} />
        <Route exact path="/" component={Startapplication} />
        <Route path="/yourproject/:tab" component={Yourproject} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/createlaunchpad" component={Createlaunchpad} />
        {/* <Route exact path="/details" component={Details} /> */}
        <Route exact path="/livechat" component={Livechat} />
        <Route exact path="/userlanding" component={Userlanding} />
        <Route exact path="/legionlaunchpad" component={Legionlaunchpad} />
        <Route exact path="/userpresaleflow" component={Userpresaleflow} />
        <Route path="/mainproject/:tab" component={Mainprojectdetail} />
        <Route exact path="/userpresaleflow2" component={Userpresaleflow2} />
        <Route exact path="/profileuser" component={Profileuser} />
      </Switch>
    </>
  );
}

export default App;
