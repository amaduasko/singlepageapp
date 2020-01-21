import React from "react";
import firstIcon from "../../images/Ellipse_1_copy_11.png";
import secondIcon from "../../images/Shape_1.png";
import "./head.style.scss";
import styled from "styled-components";

const Title = styled.h1`
  color: #fff;
  font-size: 54px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 15px;
  margin-top: 6%;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 12px;
  }
`;
const Caption = styled.p`
  width: 520px;
  color: #fff;
  font-size: 21px;
  line-height: 32px;
  text-align: center;
  margin: auto;
  margin-bottom: 10%;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 576px) {
    width: 80%;
    line-height: 20px;
    font-size: 15px;
  }
`;
const HeadIcon = styled.a`
  display: block;
  width: fit-content;
  margin: auto;
`;

export const Head = () => (
  <div className='head'>
    <HeadIcon>
      <img alt='first icon' src={firstIcon} />
    </HeadIcon>
    <Title>
      WORKING <span style={{ display: "block" }}>WITH design LAB</span>
    </Title>
    <Caption>
      We’ve been helping startups launch and grow their businesses. We help you
      to fill the gap between development, design and product management.
    </Caption>
    <HeadIcon>
      <img alt='first icon' src={secondIcon} />
    </HeadIcon>
  </div>
);
