import { ViewColumn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import mobile from "../../responsive";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
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
