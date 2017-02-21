import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { menus } from '../../config';
import MyHeader from './Header';
import './aaa.less';
import LogoIcon from '../../assets/images/logo.jpeg';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class SiderDemo extends React.Component {
  state = {
    collapsed: true,
    theme: 'dark',
    mode: 'vertical',
    openKeys: ['/news'],
  };
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    // console.log(this.props.location);
    this.setState({ collapsed, mode: collapsed ? 'vertical' : 'inline' });
  }
  onSelect = (aa) => {
    console.log(aa);
  }
  onOpenChange = (openKeys) => {
    console.log(openKeys);
    if (this.state.collapsed) {
      console.log(openKeys);
      // this.setState({ openKeys, theme: 'light' });
      this.setState({ openKeys });
    } else {
      const state = this.state;
      const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
      const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

      let nextOpenKeys = [];
      if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      }
      if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
      }
      // console.log(nextOpenKeys);
      this.setState({ openKeys: nextOpenKeys });
    }
  };
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };
  render() {
    const { collapsed, theme, mode, openKeys } = this.state;
    const { children, location } = this.props;
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <img style={{ height: '80%', borderRadius: '5px' }} src={LogoIcon} alt="" />
            <span className="text">华人生活网</span>
          </div>
          <Menu
            refs="menu"
            mode={mode}
            theme={theme}
            selectedKeys={[location.pathname]}
            onOpenChange={this.onOpenChange}
            onSelect={this.onSelect}
            // openKeys={openKeys}
            // defaultSelectedKeys={['user']}
          >
            {
            menus.map((menu) => {
              return menu.sub ?
                <SubMenu
                  key={menu.pathname}
                  title={<span><Icon type={menu.icon} /><span>{menu.text}</span></span>}
                >
                  {
                    menu.sub.map(i =>
                      <Menu.Item key={i.pathname}>
                        <Link to={i.pathname}>
                          <Icon type={i.icon} />
                          <span className="nav-text">{i.text}</span>
                        </Link>
                      </Menu.Item>,
                    )
                  }
                </SubMenu>
                :
                <Menu.Item key={menu.pathname}>
                  <Link to={menu.pathname}>
                    <Icon type={menu.icon} />
                    {!collapsed && <span className="nav-text">{menu.text}</span>}
                  </Link>
                </Menu.Item>;
            })
          }
          </Menu>
        </Sider>
        <Layout>

          <Header style={{ background: '#fff', padding: 0 }}>
            <MyHeader location={location} />
          </Header>
          <Content style={{ margin: '0 16px' }} >
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo
;
