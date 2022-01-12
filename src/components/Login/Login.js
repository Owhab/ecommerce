import React from "react";
import styled from "styled-components";
import mobile from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/fingerprint-biometric-authentication-button-digital-security-concept-picture-id1299730469?b=1&k=20&m=1299730469&s=170667a&w=0&h=w-vAa1MLy__YKtTR41J5ollZjdW0oe9lOmAMdwbwrFg=")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  text-align: center;

  ${mobile({ width: "70%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
  border: none;
  width: 40%;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: underline;
  font-size: 12;
  margin: 5px 0;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"></Input>

          <Input placeholder="Password"></Input>

          <Button>LOG IN</Button>
          <Link>Do not remember your password? </Link>
          <Link>Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
