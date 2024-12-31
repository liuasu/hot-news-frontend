// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询操作日志记列表 GET /api/operLog/list */
export async function listUsingGet3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOperLog_>('/api/operLog/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
