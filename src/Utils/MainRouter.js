import React, { Component } from "react";
import Collection from "../View/Collection";
import Users from "../View/Users";
import AboutUs from "../View/AboutUs";
import App from "../View/Home";
import GameInfo from "../View/GameInfo";
import SearchView from "../View/GameInfo";
import Notfound from "../View/NotFound";
import { Navigation } from "../Component/Navigation";
import { SiteInfo } from "../Component/SiteInfo";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
export class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Navigation} />
          {/* <Switch> */}
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
          <Route path="/gameinfo/:id" component={GameInfo} />
          <Route path="/collection" component={Collection} />
          <Route path="/aboutus" component={AboutUs} />
          {/* <Route component={Notfound} /> */}
          {/* </Switch> */}
          {/* <Route path="/" component={SiteInfo} /> */}
        </Router>
      </div>
    );
  }
}

export default MainRouter;
