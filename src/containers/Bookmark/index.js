import React, { useEffect, useState, useCallback } from "react";
import BookmarkComponent from "src/components/Bookmark";

const BookmarkContainer = () => {
  const [userPosts, updateUserPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    const bookmarkPosts = JSON.parse(localStorage.getItem("bookmark")) || {};
    let posts = [];
    Object.keys(bookmarkPosts).forEach((userID) => {
      posts = posts.concat(bookmarkPosts[userID]);
    });
    updateUserPosts(posts);
  };

  const addToBookmark = useCallback(
    async (post) => {
      const bookmarkPosts = JSON.parse(localStorage.getItem("bookmark")) || {};
      const userID = post.userId;
      bookmarkPosts[userID] = bookmarkPosts[userID].filter(
        (singlePost) => singlePost.id !== post.id
      );
      localStorage.setItem("bookmark", JSON.stringify(bookmarkPosts));
      getPosts();
    },
    [userPosts]
  );

  return <BookmarkComponent posts={userPosts} addToBookmark={addToBookmark} />;
};

export default BookmarkContainer;
