/*this  component is used to create service and about*/
import React from "react";
import serviceBoardBg from "../../images/bs.png";
import aboutBorderImg from "../../images/ba.png";
import { asinfo } from "../../constants/boardInfo";
import styled from "styled-components";

const Container = styled.div`
  background-image: ${props => (props.bg ? `url('${props.bg}')` : "unset")};
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${props => (props.bg ? "10% 0" : null)};
  margin: 10% auto;
`;
const Content = styled.div`
  width: 60%;
  margin: auto;
  padding: 5%;
  background-size: cover;
  background-repeat: round;
  @media only screen and (max-width: 768px) {
    padding: 3%;
  }
  @media only screen and (max-width: 576px) {
    padding: 2%;
  }
`;
const Title = styled.h3`
  width: max-content;
  padding: 0 10%;
  color: ${props => props.color};
  margin: auto;
  margin-top: -11%;
  margin-bottom: inherit;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    margin-top: -8%;
    letter-spacing: 3px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 15px;
  }
`;
const Text = styled.p`
  width: 70%;
  margin: auto;
  margin-top: 5%;
  color: ${props => props.color};
  font-size: 22px;
  font-weight: 300;
  line-height: 36px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    width: 80%;
    margin-top: 3%;
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
    font-size: 10px;
    line-height: 18px;
    margin-top: 2%;
  }
`;

export const Middle = () =>
  asinfo.map(info => (
    <Container key={info.id} bg={info.bg}>
      <Content
        style={{
          backgroundImage: `url('${
            info.id === "about" ? aboutBorderImg : serviceBoardBg
          }')`
        }}
      >
        <Title color={info.color}>{info.title}</Title>
        <Text color={info.color}>{info.text}</Text>
      </Content>
    </Container>
  ));
