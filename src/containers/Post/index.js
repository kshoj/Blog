import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import Loading from "src/components/Loading";
import { AppContext } from "src/context";
import PostPage from "src/components/PostPage";

const PostContainer = ({ postID }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  const { baseURL } = useContext(AppContext);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseURL}posts/${postID}`);
      const { data: comments } = await axios.get(
        `${baseURL}posts/${postID}/comments`
      );
      setPost(data);
      setComments(comments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <PostPage post={post} comments={comments} />;
};

export default PostContainer;
