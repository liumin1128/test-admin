import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
// import styles from './Sider.css';

function Sider({ location, collapse }) {
  return (
    <Menu
      theme="dark"
      // defaultSelectedKeys={['user']}
      // selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <Menu.Item key="user">
        <Icon type="user" />
        {!collapse && <span className="nav-text">Navigation 1</span>}
      </Menu.Item>
      <Menu.Item key="setting">
        <Icon type="setting" />
        {!collapse && <span className="nav-text">Navigation 2</span>}
      </Menu.Item>
      <Menu.Item key="laptop">
        <Icon type="laptop" />
        {!collapse && <span className="nav-text">Navigation 3</span>}
      </Menu.Item>
      <Menu.Item key="notification">
        <Icon type="notification" />
        {!collapse && <span className="nav-text">Navigation 4</span>}
      </Menu.Item>
      <Menu.Item key="folder">
        <Icon type="folder" />
        {!collapse && <span className="nav-text">Navigation 5</span>}
      </Menu.Item>
    </Menu>
  );
}

export default Sider;
