import * as loginService from '../services/login';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
  namespace: 'login',
  state: {
    token: '',
    auth: null,
  },
  reducers: {
    save(state, { payload }) {
      console.log(payload);
      return { ...state, payload };
    },
  },
  effects: {
    // *fetch({ payload: { page = 1 } }, { call, put }) {
    //   console.log('payload');
    //   const { data, headers } = yield call(loginService.fetch, { page });
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       data,
    //       total: parseInt(headers['x-total-count'], 10),
    //       page: parseInt(page, 10),
    //     },
    //   });
    // },
    *login({ payload: { username, password } }, { call, put }) {
      const data = yield call(loginService.login, { username, password });
      if (data.code === 200) {
        const { data: { result } } = yield call(loginService.getAuth, { token: data.token });
        console.log(result);
      } else {
        message.error('用户名或密码错误！');
      }
      console.log(data);
      // console.log({ username, password });
      // const { data: { token } } = yield call(loginService.login, { username, password });
      // const { data: { result } } = yield call(loginService.getAuth, { token });
      // console.log(result);
      // yield put({
      //   type: 'save',
      //   payload: {
      //     token,
      //     auth: result,
      //   },
      // });
      // yield put(routerRedux.push({
      //   pathname: '/users',
      // }));
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/login') {
    //       console.log('捕捉到login');
    //       // dispatch({ type: 'login', payload: query });
    //       dispatch(routerRedux.push({
    //         pathname: '/users',
    //       }));
    //     }
    //   });
    // },
  },
};
