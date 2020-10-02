import gql from 'graphql-tag';
export const CREATE_DASHBOARD_ITEM = gql`
  mutation CreateDashboardItem($input: DashboardItemInput) {
    createDashboardItem(input: $input) {
      id
      layout
      vizState
      name
    }
  }
`;
export const CREATE_DASHBOARD = gql`
  mutation CreateDashboardItem($input: CreateDashboardInput) {
    createDashboardItem(input: $input) {
      id
      name
      dashboardItems
    }
  }
`;
export const UPDATE_DASHBOARD_ITEM = gql`
  mutation UpdateDashboardItem($id: String!, $input: DashboardItemInput) {
    updateDashboardItem(id: $id, input: $input) {
      id
      layout
      vizState
      name
    }
  }
`;
export const UPDATE_DASHBOARD = gql`
  mutation UpdateDashboard($input: UpdateDashboardItem!) {
    updateDashboardItem(input: $input) {
      id
      name
      dashboardItems
    }
  }
`;
export const DELETE_DASHBOARD_ITEM = gql`
  mutation DeleteDashboardItem($id: String!) {
    deleteDashboardItem(id: $id) {
      id
      layout
      vizState
      name
    }
  }
`;
