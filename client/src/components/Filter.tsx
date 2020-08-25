import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { Department, Filters } from '../helper/interfaces';

interface Props {
  departments: Array<Department>;
  filters: Filters;
  setSearchFilters: (filters: Filters) => void;
}

const Filter = ({ departments, setSearchFilters, filters }: Props) => {
  const [searchTypes] = useState(['Product name', 'Promo code']);
  const [selectedSearch, setSelectedSearch] = useState(searchTypes[0]);

  const getSelectedSearchType = (selected: string) =>
    setSelectedSearch(selected);

  const getSelectedDepartment = (selectedDep: string) => {
    if (selectedDep === 'All') {
      return setSearchFilters({ ...filters, page: '0', dep_id: '' });
    }
    const dep = departments.find((dep: Department) => dep.name === selectedDep);
    if (dep) {
      setSearchFilters({ ...filters, page: '0', dep_id: dep._id });
    }
    return false;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedSearch === 'Product name') {
      return setSearchFilters({
        ...filters,
        page: '0',
        promo_code: '',
        query: e.target.value,
      });
    }
    return setSearchFilters({
      ...filters,
      page: '0',
      query: '',
      promo_code: e.target.value,
    });
  };

  return (
    <Container>
      <BlockContainer>
        <Inline>
          <Text>Filter By:</Text>
          <Dropdown
            items={['All', ...departments.map((dep: Department) => dep.name)]}
            itemSelected={'Department'}
            fontSize={'11px'}
            width={'120px'}
            getSelectedItem={getSelectedDepartment}
          />
        </Inline>
      </BlockContainer>
      <BlockContainer>
        <DropdownContainer>
          <Dropdown
            items={searchTypes}
            itemSelected={searchTypes[0]}
            fontSize={'11px'}
            width={'120px'}
            getSelectedItem={getSelectedSearchType}
          />
        </DropdownContainer>
        <Input placeholder={'enter search keyword'} onChange={handleOnChange} />
      </BlockContainer>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dadada;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    > div {
      display: inline-block;
    }
  }
`;

const BlockContainer = styled.div`
  position: relative;
  @media (max-width: 767px) {
    margin: auto;
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  > div {
    button {
      border-left: 0;
      height: 36px;
      border-radius: 0 5px 5px 0;
      background: #f3f3f3;
    }
  }
`;

const Input = styled.input`
  box-shadow: none;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 0 0.5rem;
  min-width: 270px;
  height: 34px;
  outline: none;
`;

const Text = styled.div`
  font-size: 12px;
  margin-right: 1rem;
`;

const Inline = styled.div`
  display: flex;
  align-items: center;
`;
