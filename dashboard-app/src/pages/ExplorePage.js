import React, { useState } from 'react';
import { Alert, Select, Spin } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import ExploreQueryBuilder from '../components/QueryBuilder/ExploreQueryBuilder';
import { GET_DASHBOARD_ITEM } from '../graphql/queries';
import TitleModal from '../components/TitleModal.js';
const ExplorePage = withRouter(({ history, location }) => {
  const [addingToDashboard, setAddingToDashboard] = useState(false);
  const params = new URLSearchParams(location.search);
  const itemId = params.get('itemId');
  const { loading, error, data } = useQuery(GET_DASHBOARD_ITEM, {
    variables: {
      id: itemId,
    },
    skip: !itemId,
  });
  const [vizState, setVizState] = useState(null);
  const finalVizState =
    vizState ||
    (itemId && !loading && data && JSON.parse(data.dashboardItem.vizState)) ||
    {};
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const finalTitle =
    title != null
      ? title
      : (itemId && !loading && data && data.dashboardItem.name) || 'New Chart';

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Alert type="error" message={error.toString()} />;
  }

  function handleDropdown( value ) {
    setTitleModalVisible(true);
    console.log( value )
}

  return (
    <div>
      <TitleModal
        history={history}
        itemId={itemId}
        titleModalVisible={titleModalVisible}
        setTitleModalVisible={setTitleModalVisible}
        setAddingToDashboard={setAddingToDashboard}
        finalVizState={finalVizState}
        setTitle={setTitle}
        finalTitle={finalTitle}
      />
      <ExploreQueryBuilder
        vizState={finalVizState}
        setVizState={setVizState}
        chartExtra={[
          <Select
            placeholder="Select a dashboard"
            loading={addingToDashboard}
            setAddingToDashboard={setAddingToDashboard}
            onChange={ value => handleDropdown( value )}
          >
            <option key="1" value="1">
              Dashboard1
            </option>
              <option key="2" value="2">
              Dashboard2
            </option>

            <option key="3" value="3">
              Dashboard3
            </option>
          </Select>
        ]}
      />
    </div>
  );
});
export default ExplorePage;
