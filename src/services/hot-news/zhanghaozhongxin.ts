// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取第三方账户列表 - 账号中心 GET /api/third-party/account_centre/list */
export async function getThirdPartyAccountListByAccountCentreUsingGet(options?: {
  [key: string]: any;
}) {
  return request<API.BaseResponseListAccountCentreVO_>('/api/third-party/account_centre/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 账号登录 POST /api/third-party/add */
export async function addThirdPartyAccountListUsingPost(
  body: API.ThirdPartyAccountAddReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/third-party/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 账号删除 POST /api/third-party/del */
export async function delThirdPartyAccountUsingPost(
  body: API.ThirdPartyAccountDelReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/third-party/del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取第三方账户列表 - 任务中心获取 GET /api/third-party/list */
export async function getThirdPartyAccountListUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListThirdPartyAccountVO_>('/api/third-party/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查看账号 GET /api/third-party/query */
export async function queryThirdPartyAccountUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryThirdPartyAccountUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/third-party/query', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
