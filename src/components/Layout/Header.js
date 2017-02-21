import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.css';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
function Header({ location }) {
  return (
    <div className={styles.normal} >
      <span />
      <Menu
        className={styles.menu}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        // theme="dark"
      >
        <SubMenu className={styles.user} title={<span><Icon type="user" />管理员</span>}>
          <Menu.Item key="setting:1"><Link to="/login">注销登录</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </div>

  );
}

export default Header;
