import React from "react";
import ProfileContainer from "src/containers/Profile";

const ProilePage = ({ match }) => (
  <ProfileContainer userID={match.params.userID} />
);

export default ProilePage;
