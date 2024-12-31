// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 按id查询提示词 GET /api/prompt/${param0} */
export async function getByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponsePromptVO_>(`/api/prompt/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加ai提示词 POST /api/prompt/add */
export async function addUsingPost2(body: API.PromptAddReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/prompt/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询ai提示词列表 GET /api/prompt/admin/list */
export async function listUsingGet4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET4Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePromptVO_>('/api/prompt/admin/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除ai提示词 POST /api/prompt/delete/${param0} */
export async function deleteUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/prompt/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改ai提示词 POST /api/prompt/edit */
export async function editUsingPost5(body: API.PromptEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/prompt/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询ai提示词列表 GET /api/prompt/list */
export async function listUsingGet5(options?: { [key: string]: any }) {
  return request<API.BaseResponseListPromptVO_>('/api/prompt/list', {
    method: 'GET',
    ...(options || {}),
  });
}
