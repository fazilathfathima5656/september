import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';

const Header = ({ location }) => (
  <Layout.Header
    style={{
      padding: '0 32px',
    }}
  >
    <div
      style={{
        float: 'left',
      }}
    >
      <h2
        style={{
          color: '#fff',
          margin: 0,
          marginRight: '1em',
          display: 'inline',
          width: 100,
          lineHeight: '54px',
        }}
      >
        TOOL
      </h2>
</div>

{/* onClick = () => {
  localStorage.setItem('Dashboard1', 1)
  // localStorage.setItem('user', rememberMe ? user : '');
}; */}
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        lineHeight: '64px',
      }}
    >
      <Menu.Item key="/explore">
        <Link to="/explore">Explore</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"> Dashboard1 </Link>
      </Menu.Item>
      <Menu.Item key="/1">
        <Link to="/Dashboard2"> Dashboard2 </Link>
      </Menu.Item>
      <Menu.Item key="/2">
        <Link to="/Dashboard3"> Dashboard3 </Link>
      </Menu.Item>
      <Menu.Item key="/3">
        <Link to="/Dashboard4"> Dashboard4 </Link>
      </Menu.Item>
  
    </Menu>
  </Layout.Header>
);

export default withRouter(Header);
