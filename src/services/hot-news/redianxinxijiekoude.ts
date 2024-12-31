// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 按id获取热点信息接口地 GET /api/hotApi/${param0} */
export async function findHotApiByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findHotApiByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseHotApiVO_>(`/api/hotApi/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加热点信息接口地 POST /api/hotApi/add */
export async function addUsingPost1(body: API.HotApiAddReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/hotApi/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除热点信息接口地 POST /api/hotApi/delete/${param0} */
export async function editUsingPost4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editUsingPOST4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/hotApi/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改热点信息接口地 POST /api/hotApi/edit */
export async function editUsingPost3(body: API.HotApiEditReq, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/hotApi/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** excelAdd POST /api/hotApi/excel/add */
export async function excelAddUsingPost(body: {}, file?: File, options?: { [key: string]: any }) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseBoolean_>('/api/hotApi/excel/add', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 查询热点信息接口地列表 GET /api/hotApi/list */
export async function listUsingGet2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageHotApiVO_>('/api/hotApi/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传Excel文件 POST /api/hotApi/upload */
export async function uploadExcelUsingPost(
  body: FormData,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/hotApi/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: body,
    ...(options || {}),
  });
}
