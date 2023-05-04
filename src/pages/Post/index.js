import React from "react";
import PostContainer from "src/containers/Post";

const PostPage = ({ match }) => <PostContainer postID={match.params.postID} />;

export default PostPage;
