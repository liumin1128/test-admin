import React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import Header from './Header';
import './Layout.css';
import { menus } from '../../config';

const SubMenu = Menu.SubMenu;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      theme: 'dark',
      mode: 'vertical',
      openKeys: [],
    };
    this.onCollapseChange = () => {
      this.setState({
        collapse: !this.state.collapse,
        mode: !this.state.collapse ? 'vertical' : 'inline',
      });
    };
    this.onOpenChange = (openKeys) => {
      // console.log(openKeys);
      if (this.state.collapse) {
        // console.log(openKeys);
        // this.setState({ openKeys, theme: 'light' });
        // this.setState({ openKeys });
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
    this.getAncestorKeys = (key) => {
      const map = {
        sub3: ['sub2'],
      };
      return map[key] || [];
    };
  }
  componentWillMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const { collapse, theme, mode } = this.state;
    const { children, location } = this.props;
    return (
      <div className={collapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
        <aside className="layout-sider">
          <div className="layout-logo" />
          <Menu
            refs="menu"
            mode={mode}
            theme={theme}
            selectedKeys={[location.pathname]}
            onOpenChange={this.onOpenChange}
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
                    {!collapse && <span className="nav-text">{menu.text}</span>}
                  </Link>
                </Menu.Item>;
            })
          }
          </Menu>
          <div className="aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="layout-main">
          <Header location={location} />
          <div className="layout-container">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>App list</Breadcrumb.Item>
              <Breadcrumb.Item>Any app</Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-content">
              <div>
                { children }
              </div>
            </div>
          </div>
          <div className="layout-footer">
            Ant Design all rights reserved © 2015 Created by Ant UED
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
