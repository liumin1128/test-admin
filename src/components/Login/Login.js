import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import logoIcon from '../../assets/images/logo.jpeg';
import styles from './Login.less';

const FormItem = Form.Item;

const NormalLoginForm = ({
  loginButtonLoading,
  // onOk,
  dispatch,
  loading,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({
        type: 'login/login',
        payload: values,
      });
      // dispatch({
      //   type: 'users/fetch',
      //   payload: values,
      // });
    });
  }

  return (
    <div className={styles.normal}>
      <div className={styles.bg} />
      <Card
        className={styles.box}
          // title="欢迎登录-华人地产管理后台"
        bordered={false}
        style={{ maxWidth: 350 }}
      >
        <div className={styles.logo}><img src={logoIcon} alt="" /></div>
        <form>
          <FormItem help="Should be combination of numbers & alphabets" hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '请填写用户名',
                },
              ],
            })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请填写密码',
                },
              ],
            })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
          </FormItem>
          <Button style={{ width: '100%' }} type="primary" size="large" onClick={handleOk} loading={loading}>
            登录
          </Button>
        </form>
      </Card>
    </div>
  );
};

function mapStateToProps(state) {
  // const { list, total, page } = state.users;
  return {
    loading: state.loading.models.login,
  };
}

export default connect(mapStateToProps)(Form.create()(NormalLoginForm));
