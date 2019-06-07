import React from 'react';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import Tab from './Tab';
const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  console.log(selectedTab)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
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
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
  tabs: pt.array.isRequired,
  selectedTab: pt.string.isRequired,
  selectTabHandler: pt.func.isRequired
}