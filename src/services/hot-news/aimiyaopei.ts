// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 按id获取ai 秘钥配 GET /api/aiConfig/${param0} */
export async function findAiConfigByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAiConfigByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseAiConfigVO_>(`/api/aiConfig/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除ai 秘钥配 POST /api/aiConfig/delete/${param0} */
export async function editUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/aiConfig/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改ai 秘钥配 POST /api/aiConfig/edit */
export async function editUsingPost(body: API.AiConfigEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/aiConfig/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询ai 秘钥配列表 GET /api/aiConfig/list */
export async function listUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListAiConfigVO_>('/api/aiConfig/list', {
    method: 'GET',
    ...(options || {}),
  });
}
