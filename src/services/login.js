import request from '../utils/postRequest';

const requestUtl = 'http://api.huarenhouse.com/';

export function login(params) {
  return request(`${requestUtl}admin/login`, params);
}

export function getAuth(params) {
  return request(`${requestUtl}token/validateToken`, params);
}
