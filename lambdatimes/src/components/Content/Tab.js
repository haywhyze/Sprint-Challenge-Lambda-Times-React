import React from 'react';
import pt from 'prop-types';

const Tab = ({ tab, selectedTab }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={(tab) => {selectedTab(tab)}}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tab: pt.string.isRequired,
  selectedTab: pt.string.isRequired,
}
