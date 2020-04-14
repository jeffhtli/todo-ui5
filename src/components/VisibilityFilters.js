import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <TabContainer
      fixed={true}
      collapsed={true}
      showOverflow={true}
      onItemSelect={e => {
        const filterText = e.originalEvent.detail.item.text;
        setFilter(filterText);
      }}
    >
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <Tab
            key={`visibility-filter-${currentFilter}`}
            text={currentFilter}
            selected={currentFilter === activeFilter}>
          </Tab>
        )
      })}
    </TabContainer>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
