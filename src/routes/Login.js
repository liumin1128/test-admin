import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from '../components/Login/Login';

function Sign() {
  return (
    <div className={styles.normal}>
      <LoginComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Sign);
