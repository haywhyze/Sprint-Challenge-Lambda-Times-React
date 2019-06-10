import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import Tab from './Tab';

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <StyledTabs>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        tabs.map(tab => 
          <Tab 
            key={uuidv1()} 
            selectTabHandler={selectTabHandler}
            selectedTab={`${selectedTab}`}
            tab={tab}
          />)
            }
      </Topics>
    </StyledTabs>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
  tabs: pt.array.isRequired,
  selectedTab: pt.string.isRequired,
  selectTabHandler: pt.func.isRequired
}