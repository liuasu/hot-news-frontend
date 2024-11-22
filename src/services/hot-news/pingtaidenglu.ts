// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 头条号登录 GET /api/edge/driver/toutiao/login */
export async function touTiaoLoginUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/edge/driver/toutiao/login', {
    method: 'GET',
    ...(options || {}),
  });
}
