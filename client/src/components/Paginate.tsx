import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { PaginationInfo } from '../helper/interfaces';

interface Props {
  paginationIfno: PaginationInfo;
  handlePageClick: (selectedItem: { selected: number }) => void;
}

const Paginate = ({ paginationIfno, handlePageClick }: Props) => {
  return (
    <Container>
      <ReactPaginate
        previousLabel={<i className="fa fa-chevron-left" />}
        nextLabel={<i className="fa fa-chevron-right" />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={paginationIfno.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
  );
};

export default Paginate;

const Container = styled.div`
  text-align: center;
  margin-top: 3rem;
  .pagination {
    padding: 0;
    list-style: none;
    display: inline-block;
    border-radius: 25px;
    background: #fff;

    li {
      display: inline-block;

      vertical-align: middle;
      cursor: pointer;
      text-align: center;
      outline: none;
      box-shadow: none;
      a {
        display: block;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        outline: none;
        box-shadow: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          color: green;
        }
      }
      &:first-child,
      &:last-child {
        margin: 0 10px;
        padding: 0;
        a {
          width: 35px;
          height: 35px;
          border-radius: 50%;

          &:hover {
            background: green;
            color: #fff;
          }
        }
        text-align: center;
      }

      &.active {
        a {
          background: green;
          color: white;
          border-radius: 50%;
        }
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
`;
