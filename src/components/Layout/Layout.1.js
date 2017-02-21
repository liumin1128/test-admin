import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import Sider from './Sider';
import './Layout.css';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <Sider className={styles.sider} location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}

        </div>
      </div>
    </div>
  );
}

export default MainLayout;
