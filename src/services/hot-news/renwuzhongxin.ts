// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加任务中心 POST /api/task/add */
export async function addUsingPost3(body: API.TaskAddReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/task/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除任务中心 POST /api/task/delete/${param0} */
export async function deleteUsingPost2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/task/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改任务中心 POST /api/task/edit */
export async function editUsingPost6(body: API.TaskEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/task/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询任务中心列表 GET /api/task/list */
export async function listUsingGet6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET6Params,
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

/** 查看热点相关文章 POST /api/task/query/article */
export async function hotNewsQueryArticlesUsingPost(
  body: API.ProductionArticleAddReq1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/task/query/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
