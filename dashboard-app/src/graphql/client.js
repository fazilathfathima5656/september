/* globals window */
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
const cache = new InMemoryCache();
const defaultDashboardItems = [];

const getDashboardItems = dashboard =>
  JSON.parse(window.localStorage.getItem( dashboard || 'dashboardItems')) ||
  defaultDashboardItems;

const getDashboard = dashboard =>
  JSON.parse(window.localStorage.getItem( dashboard ));

const setDashboardItems = (items, dashboard) =>
  window.localStorage.setItem( dashboard, JSON.stringify(items));

const setDashboard = (items, dashboardName, dashboard ) =>
  window.localStorage.setItem( dashboardName, JSON.stringify({...dashboard, dashboardItems: items }));

const nextId = () => {
  const currentId =
    parseInt(window.localStorage.getItem('dashboardIdCounter'), 10) || 1;
  window.localStorage.setItem('dashboardIdCounter', currentId + 1);
  return currentId.toString();
};

const toApolloItem = (i) => ({ ...i, __typename: 'DashboardItem' });
const toApolloDashboard = (i) => ({ ...i, __typename: 'Dashboard' });

const typeDefs = `
  type DashboardItem {
    id: String!
    layout: String
    vizState: String
    name: String
  }

  type Dashboard {
    id: String!
    name: String
    dashboardItems: [DashboardItem]
  }

  input DashboardItemInput {
    layout: String
    vizState: String
    name: String
  }

  input CreateDashboardInput {
    name: String!
  }

  input  UpdateDashboardInput {
    name: String!
    id: String!
    items: [DashboardItemInput]
  }

  type Query {
    dashboardItems: [DashboardItem]
    dashboardItem(id: String!): DashboardItem
    dashboard: Dashboard
  }

  type Mutation {
    createDashboardItem(input: DashboardItemInput): DashboardItem
    createDashboard(input: CreateDashboardInput): Dashboard
    updateDashboard(input: UpdateDashboardInput): Dashboard
    updateDashboardItem(id: String!, input: DashboardItemInput): DashboardItem
    deleteDashboardItem(id: String!): DashboardItem
  }
`;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      dashboardItems(id) {
        const dashboardItems = getDashboardItems();
        return dashboardItems.map(toApolloItem);
      },

      dashboardItem(_, { id }) {
        const dashboardItems = getDashboardItems();
        return toApolloItem(dashboardItems.find((i) => i.id.toString() === id));
      },

      dashboard( d ) {
        const dashboardItems = getDashboardItems( d );
        let savedDashboard = getDashboard( d );
        if ( !savedDashboard ) {
          savedDashboard = {
            id: nextId(),
            name: 'initial dashboard',
            dashboardItems
          };
          setDashboard( dashboardItems, savedDashboard.name, savedDashboard )
        }
        return  toApolloDashboard(
          savedDashboard
        );
      }
    },
    Mutation: {
      createDashboardItem: (_, { input: { ...item } }) => {
        const dashboardItems = getDashboardItems();
        item = { ...item, id: nextId(), layout: JSON.stringify({}) };
        dashboardItems.push(item);
        setDashboardItems(dashboardItems);
        return toApolloItem(item);
      },
      createDashboard: (_, { input: { name } }) => {
        const dashboard = {
          id: nextId(),
          name,
          dashboardItems: []
        };

        setDashboard([], name, dashboard );
        return toApolloDashboard(dashboard);
      },
      updateDashboard: (_, { input: { name, items } }) => {
        const dashboard = getDashboard( name );
        dashboard.dashboardItems = [ ...items ];
        return toApolloDashboard(dashboard);
      },
      updateDashboardItem: (_, { id, input: { ...item } }) => {
        const dashboardItems = getDashboardItems();
        item = Object.keys(item)
          .filter((k) => !!item[k])
          .map((k) => ({
            [k]: item[k],
          }))
          .reduce((a, b) => ({ ...a, ...b }), {});
        const index = dashboardItems.findIndex((i) => i.id.toString() === id);
        dashboardItems[index] = { ...dashboardItems[index], ...item };
        setDashboardItems(dashboardItems);
        return toApolloItem(dashboardItems[index]);
      },
      deleteDashboardItem: (_, { id }) => {
        const dashboardItems = getDashboardItems();
        const index = dashboardItems.findIndex((i) => i.id.toString() === id);
        const [removedItem] = dashboardItems.splice(index, 1);
        setDashboardItems(dashboardItems);
        return toApolloItem(removedItem);
      },
    },
  },
});
export default new ApolloClient({
  cache,
  link: new SchemaLink({
    schema,
  }),
});
