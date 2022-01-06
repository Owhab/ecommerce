import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1``;
const Description = styled.p``;
const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://5.imimg.com/data5/EZ/OQ/OC/SELLER-67282481/ladies-fashion-bags-250x250.png" />
          </ImageContainer>
          <InfoContainer>
            <Title></Title>
            <Description></Description>
            <Button></Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
