// @ts-ignore
/* eslint-disable */
import {request} from '@umijs/max';

/** 获取第三方账号集合 GET /api/third-party/list */
export async function getThirdPartyAccountListUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListThirdPartyAccountVO_>('/api/third-party/list', {
    method: 'GET',
    ...(options || {}),
  });
}
