import gql from 'graphql-tag';
export const GET_DASHBOARD_ITEMS = gql`
  query GetDashboardItems($id: String) {
    dashboardItems(id: $id) {
      id
      layout
      vizState
      name
    }
  }
`;
export const GET_DASHBOARD_ITEM = gql`
  query GetDashboardItem($id: String!) {
    dashboardItem(id: $id) {
      id
      layout
      vizState
      name
    }
  }
`;
