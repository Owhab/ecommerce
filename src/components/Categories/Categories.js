import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
