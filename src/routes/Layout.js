import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout/Layout';

function MainLayout({ location, children }) {
  return (
    <Layout location={location}>
      {children}
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainLayout);
