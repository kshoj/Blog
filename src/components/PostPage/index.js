import React from "react";
import {
  OwnRow,
  BackColor,
  FullWidth,
  Image,
  Text,
} from "src/components/common";
import { Col, Container } from "react-bootstrap";
import Profile from "src/assets/images/post.png";
import {
  Column,
  HeadTitle,
  Description,
  CommentBlock,
  WrapComments,
} from "./style";

function PostPage({ post, comments }) {
  return (
    <BackColor>
      <Container>
        <OwnRow>
          <Col md={3} lg={3}>
            <Column>
              <FullWidth>
                <Image src={Profile} radius={"unset"}></Image>
              </FullWidth>
            </Column>
          </Col>
          <Col md={9} lg={9}>
            <Column>
              <Description borderBottom="1px solid #c4bfb6">
                <HeadTitle>{post.title}</HeadTitle>
              </Description>
              <Description borderBottom="1px solid #c4bfb6">
                <Text>{post.body}</Text>
              </Description>
              <Description>
                <HeadTitle>Comments:</HeadTitle>
                <WrapComments>
                  {comments.map((comment) => (
                    <CommentBlock>
                      <Text>
                        <b>
                          {comment.name} <i>Says :</i>
                        </b>
                        <br />
                        {comment.body}
                      </Text>
                    </CommentBlock>
                  ))}
                </WrapComments>
              </Description>
            </Column>
          </Col>
        </OwnRow>
      </Container>
    </BackColor>
  );
}

export default PostPage;
