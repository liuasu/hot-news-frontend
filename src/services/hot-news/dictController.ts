// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 按id获取字典 GET /api/dict/${param0} */
export async function dictFindDictByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dictFindDictByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseDict_>(`/api/dict/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除字典 POST /api/dict/${param0} */
export async function dictDeleteUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dictDeleteUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dict/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加字典 POST /api/dict/add */
export async function dictAddUsingPost(body: API.DictAddReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/dict/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改字典 POST /api/dict/edit */
export async function dictEditUsingPost(body: API.DictEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/dict/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询字典列表 GET /api/dict/list */
export async function dictListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dictListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListDict_>('/api/dict/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
