import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "src/pages/Home";
import ProfilePage from "src/pages/Profile";
import PostPage from "src/pages/Post";
import FavoritPage from "src/pages/Bookmark";
import ErrorPage from "src/pages/404page";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/profile/:userID" exact component={ProfilePage} />
    <Route path="/bookmark" exact component={FavoritPage} />
    <Route path="/post/:postID" exact component={PostPage} />
    <Route path="*" exact component={ErrorPage} />
  </Switch>
);

export default Routes;
