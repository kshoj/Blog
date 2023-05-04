import React from "react";
import {
  OwnRow,
  Image,
  OwnDiv,
  Text,
  OwnSpan,
  BackColor,
  FullWidth,
  RealBtn,
} from "src/components/common";
import { Col } from "react-bootstrap";
import { ProfileDetail, InfoBox, PostPic, PostWrap, RowPost } from "./style";
import Profile from "src/assets/images/avatar.png";
import Post from "src/assets/images/post.png";

function ProfilePage({ user, posts, addToBookmark }) {
  if (!user) {
    return null;
  }

  return (
    <BackColor>
      <OwnRow>
        <Col md={2} lg={2}>
          <ProfileDetail>
            <FullWidth>
              <Image src={Profile}></Image>
            </FullWidth>
          </ProfileDetail>
        </Col>
        <Col md={10} lg={10}>
          <OwnDiv>
            <h5>{user.name}</h5>
          </OwnDiv>
          <InfoBox size="60%" smSize="100%" column="column">
            <OwnDiv>
              <OwnSpan textColor="#434343">Phone</OwnSpan>
              <OwnSpan>:</OwnSpan>
              <OwnSpan>{user.phone}</OwnSpan>
            </OwnDiv>
            <OwnDiv>
              <OwnSpan textColor="#434343">Email</OwnSpan>
              <OwnSpan>:</OwnSpan>
              <OwnSpan>{user.email}</OwnSpan>
            </OwnDiv>
          </InfoBox>
          <InfoBox size="100%">
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
                  <OwnDiv>
                    <h6>{post.title}</h6>
                  </OwnDiv>
                  <OwnDiv>
                    <Text>{post.body}</Text>
                  </OwnDiv>
                </PostPic>
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

export default ProfilePage;
