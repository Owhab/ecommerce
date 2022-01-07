import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  background-color: #${(props) => props.color};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Z-Mart</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          optio! Reprehenderit odit amet molestiae eius modi omnis provident
          minus repudiandae!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="e4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn></LinkedIn>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT US</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "20px" }} /> Mirpur- 2, Dhaka,
          Bangladesh.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "20px" }} /> (+880) 1771176606
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "20px" }} /> mail.owhab@gmail.com
        </ContactItem>
        <Payment src="https://icon-library.com/images/discover-credit-card-icon/discover-credit-card-icon-7.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
