import React from 'react';
import styled from 'styled-components';
import { Product } from '../helper/interfaces';

interface Props {
  products: Array<Product>;
}

const List = ({ products }: Props) => {
  const product = (prod: Product) => (
    <ListItem key={prod._id}>
      <Block className="bold">{prod.name}</Block>
      <Block className="blueish">{prod.price}</Block>
      <Block>{prod.department_id.name}</Block>
      <Block className="pinkish">
        {prod.promotion.promotion_id.active
          ? prod.promotion.promotion_id.code
          : 'None'}
      </Block>
      <Block>
        {prod.promotion.promotion_id.active
          ? prod.promotion.promotion_id.discount + ' %'
          : '--'}
      </Block>
    </ListItem>
  );
  const returnProducts = () => products.map(product);

  return (
    <Container>
      <Table>
        <thead>
          <ListItem>
            <Block>Name</Block>
            <Block>Price</Block>
            <Block>Department</Block>
            <Block>Promo Code</Block>
            <Block>Discount</Block>
          </ListItem>
        </thead>
        <tbody>{products.length > 0 ? returnProducts() : null}</tbody>
      </Table>
    </Container>
  );
};

export default List;

const Container = styled.div`
  @media (max-width: 767px) {
    overflow-x: auto;
  }
`;

const Table = styled.table`
  background: #fff;
  width: 100%;
  border-collapse: separate;
  border-spacing: 12px;
  thead {
    tr {
      box-shadow: none;
      td {
        font-size: 11px;
      }
    }
  }
`;

const ListItem = styled.tr`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  margin: 10px 0;
`;

const Block = styled.td`
  font-size: 13px;
  padding: 1rem;
  &.bold {
    font-weight: 600;
  }
  &.blueish {
    color: blueviolet;
  }
  &.pinkish {
    color: purple;
  }
`;
