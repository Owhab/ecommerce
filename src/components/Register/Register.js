import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
  border: none;
  width: 40%;
`;
const Aggrement = styled.span`
  margin: 20px 0;
  font-size: 12px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Button>Sign in With Google</Button>
        <h3>Or</h3>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Aggrement>
            By Creating an Account, I Consent to The Processing of My Personal
            Information in Accordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
