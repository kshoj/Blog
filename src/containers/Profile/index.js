import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import Loading from "src/components/Loading";
import Profile from "src/components/Profile";
import { AppContext } from "src/context";

const ProfileContainer = ({ userID }) => {
  const [userInfo, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { baseURL } = useContext(AppContext);

  useEffect(() => {
    getCurrentUserInfo();
    getUserPost();
  }, []);

  const getCurrentUserInfo = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseURL}users/${userID}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const normalizePosts = useCallback((posts) => {
    const bookmarkPosts = JSON.parse(localStorage.getItem("bookmark")) || {};
    const userPostsIDs = bookmarkPosts[userID]?.map(
      (singlePost) => singlePost.id
    );
    const newPosts = posts.map((post) => {
      post.isBookmark = userPostsIDs
        ? userPostsIDs.indexOf(post.id) !== -1
        : false;
      return post;
    });
    return newPosts;
  }, []);

  const getUserPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseURL}posts?userId=${userID}`);
      setUserPosts(normalizePosts(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToBookmark = useCallback(
    async (post) => {
      const bookmarkPosts = JSON.parse(localStorage.getItem("bookmark")) || {};
      if (!bookmarkPosts[userID]) {
        bookmarkPosts[userID] = [{ ...post, isBookmark: true }];
      } else {
        const isPostExists = bookmarkPosts[userID].some(
          (singlePost) => singlePost.id === post.id
        );
        if (isPostExists) {
          bookmarkPosts[userID] = bookmarkPosts[userID].filter(
            (singlePost) => singlePost.id !== post.id
          );
        } else {
          bookmarkPosts[userID] = bookmarkPosts[userID].concat([
            { ...post, isBookmark: true },
          ]);
        }
      }
      localStorage.setItem("bookmark", JSON.stringify(bookmarkPosts));
      const newPosts = normalizePosts(userPosts);
      setUserPosts(newPosts);
    },
    [userID, userPosts]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Profile user={userInfo} posts={userPosts} addToBookmark={addToBookmark} />
  );
};

export default ProfileContainer;
