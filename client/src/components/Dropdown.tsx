import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  itemSelected: string;
  items: Array<any>;
  getSelectedItem?: (item: string) => void;
  padding?: string;
  minWidth?: string;
  fontSize?: string;
  width?: string;
  extraWord?: string;
}
const Dropdown = (props: Props) => {
  const wrapperRef = useRef(null);
  const {
    itemSelected,
    items,
    padding,
    minWidth,
    width,
    extraWord,
    fontSize,
    getSelectedItem,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(itemSelected);
  const handleItemClick = (item: string) => {
    setIsOpen(!isOpen);
    setSelectedItem(item);
    getSelectedItem && getSelectedItem(item);
  };

  const handleClickOutside = (event: any) => {
    const wrapper: any = wrapperRef.current;
    if (!wrapper.contains(event.target)) {
      setTimeout(() => {
        setIsOpen(false);
      }, 10);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    setSelectedItem(itemSelected);
  }, [itemSelected]);

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <InnerContainer ref={wrapperRef}>
        <DropdownBtn
          style={{
            padding: padding || '10px 15px',
            fontSize: fontSize || '15px',
            width: width || 'auto',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text">
            <span>{extraWord}</span> {selectedItem}
          </span>
          {isOpen ? (
            <i className="fa fa-angle-up" />
          ) : (
            <i className="fa fa-angle-down" />
          )}
        </DropdownBtn>
        <DropdownMenu
          style={{
            display: isOpen ? 'block' : 'none',
            minWidth: minWidth || '140px',
          }}
        >
          {items.map((item: any, index: number) => (
            <DropDownItem key={index} onClick={() => handleItemClick(item)}>
              {item}
            </DropDownItem>
          ))}
        </DropdownMenu>
      </InnerContainer>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  display: inline-block;
  &.isOpen {
    position: relative;
    z-index: 1000;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  z-index: 999;
`;
const DropdownBtn = styled.button`
  border: 1px solid #dadada;
  box-shadow: none;
  background: #fff;
  color: #272727;
  border-radius: 5px;
  outline: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  .text {
    display: inline-block;
    vertical-align: middle;
  }
  i {
    margin-left: auto;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: 2px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  text-align: left;
`;

const DropDownItem = styled.div`
  padding: 5px 15px;
  color: #272727;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: green;
    color: #fff;
  }
`;
