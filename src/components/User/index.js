import React from "react";
import Profile from "src/assets/images/avatar.png";
import { ProfileBox, UserNameBlock } from "./style";
import {
  Text,
  OwnDiv,
  OwnSpan,
  RealBtn,
  CircleFrame,
  Image,
  WrapBlock,
} from "src/components/common";

const UsersPage = ({ fullName, website, email, phone, id }) => {
  return (
    <ProfileBox>
      <CircleFrame>
        <Image src={Profile}></Image>
      </CircleFrame>
      <UserNameBlock>
        <OwnDiv>
          <Text>{fullName}</Text>
        </OwnDiv>
        <OwnDiv>
          <OwnSpan>email</OwnSpan>
          <OwnSpan>:</OwnSpan>
          <OwnSpan>{email}</OwnSpan>
        </OwnDiv>
        <OwnDiv>
          <OwnSpan>Phone</OwnSpan>
          <OwnSpan>:</OwnSpan>
          <OwnSpan>{phone}</OwnSpan>
        </OwnDiv>
        <OwnDiv>
          <OwnSpan>Website</OwnSpan>
          <OwnSpan>:</OwnSpan>
          <OwnSpan>{website}</OwnSpan>
        </OwnDiv>
        <OwnDiv>
          <RealBtn to={`/profile/${id}`}>See Profile</RealBtn>
        </OwnDiv>
      </UserNameBlock>
    </ProfileBox>
  );
};

export default UsersPage;
