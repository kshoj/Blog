import React from "react";
import {
  OwnRow,
  Image,
  OwnDiv,
  Text,
  BackColor,
  RealBtn,
} from "src/components/common";
import { Col } from "react-bootstrap";
import { InfoBox, PostPic, PostWrap, RowPost } from "./../Profile/style";
import Post from "src/assets/images/post.png";

function Bookmark({ posts, addToBookmark }) {
  return (
    <BackColor>
      <OwnRow>
        <Col md={12} lg={12}>
          <InfoBox size="100%" justify="space-around">
            {posts.length === 0 && <p>No contet.</p>}
            {posts?.map((post) => (
              <PostWrap key={post.id}>
                <PostPic>
                  <Image src={Post} radius={"unset"}></Image>
                  <button
                    onClick={() => {
                      addToBookmark(post);
                    }}
                  >
                    <i
                      className={`fa fa-heart ${
                        post.isBookmark ? "bookmark" : ""
                      }`}
                      top="0px"
                      right="unset"
                      left="0px"
                    ></i>
                  </button>
                </PostPic>
                <OwnDiv>
                  <Text>{post.title}</Text>
                </OwnDiv>
                <OwnDiv>
                  <Text>{post.body}</Text>
                </OwnDiv>
                <OwnDiv>
                  <RealBtn to={`/post/${post.id}`}>See More</RealBtn>
                </OwnDiv>
              </PostWrap>
            ))}
          </InfoBox>
        </Col>
      </OwnRow>
    </BackColor>
  );
}

export default Bookmark;
