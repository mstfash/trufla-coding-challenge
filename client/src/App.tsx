import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from './store';
import Loading from './components/Loading';
import List from './components/List';
import { Filters } from './helper/interfaces';
import Paginate from './components/Paginate';
import Filter from './components/Filter';
import { cancelKeywordRequest } from './api';
import Axios from 'axios';

const App = () => {
  const [filters, setFilters] = useState<Filters>({
    limit: '5',
    page: '0',
    dep_id: '',
    promo_code: '',
    query: '',
  });
  const { productModel: productState } = useStoreState((state) => state);
  const { productModel: productActions } = useStoreActions((state) => state);

  const handlePageClick = (data: { selected: number }) => {
    const resetFilters = { ...filters, page: String(data.selected) };
    setFilters(resetFilters);
    fetchData(resetFilters);
  };

  const fetchData = async (currentFilters = filters) => {
    try {
      productActions.setIsLoading(true);
      await productActions.fetchProducts(currentFilters);
    } catch (error) {
      if (Axios.isCancel(error)) return;
      console.log(error);
    } finally {
      productActions.setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    productActions.fetchDepartments();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
    return () => cancelKeywordRequest();
    // eslint-disable-next-line
  }, [filters]);

  return (
    <Container>
      <Title>Trufla Coding Challenge</Title>

      {productState.departments.length > 0 ? (
        <Filter
          departments={productState.departments}
          filters={filters}
          setSearchFilters={setFilters}
        />
      ) : null}
      <ListContainer>
        {productState.isLoading ? (
          <Loading />
        ) : productState.products.length > 0 ? (
          <List products={productState.products} />
        ) : null}
      </ListContainer>
      {productState.paginationInfo ? (
        <Paginate
          paginationIfno={productState.paginationInfo}
          handlePageClick={handlePageClick}
        />
      ) : null}
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 3rem 0;
`;

const ListContainer = styled.div`
  min-height: 369px;
`;
