import React from 'react';
import { Link } from 'dva/router';
import styles from './NotFound.css';
import ErrorImg404 from '../../assets/images/404.svg';

function NotFound() {
  return (
    <div className={styles.normal}>
      <img className={styles.error} src={ErrorImg404} alt="404" />
      <Link to="/" className={styles.back} >返回首页</Link>
    </div>
  );
}

export default NotFound;
