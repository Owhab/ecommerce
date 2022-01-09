import React from "react";
import styled from "styled-components";
import Announcement from "../Announcement/Announcement";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Newsletter } from "../Newsletter/Newsletter";
import Products from "../Products/Products";

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const ProductList = () => {
  return (
    <Container>
      <Header></Header>
      <Announcement></Announcement>
      <Title>Dressess</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 1</Filter>
      </FilterContainer>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
