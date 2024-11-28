// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除任务中心 POST /api/task/${param0} */
export async function deleteUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/task/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加任务中心 POST /api/task/add */
export async function addUsingPost1(body: API.TaskAddReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/task/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改任务中心 POST /api/task/edit */
export async function editUsingPost2(body: API.TaskEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/task/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文章生成(头条) POST /api/task/editing/toutiao */
export async function modelGenerationInTouTiaoUsingPost(
  body: API.HotNewsAddReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringString_>('/api/task/editing/toutiao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询任务中心列表 GET /api/task/list */
export async function listUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTaskVO_>('/api/task/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
