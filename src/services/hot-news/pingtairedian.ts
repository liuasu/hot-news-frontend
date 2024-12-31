// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 腾讯新闻热点 GET /api/hot_new/qq_news */
export async function qqNewsHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/qq_news', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 澎湃热点 GET /api/hot_new/thepaper */
export async function thePaPerHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/thepaper', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 36氪热点 GET /api/hot_new/thirtysix */
export async function thirtySixKrHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/thirtysix', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 网易热点 GET /api/hot_new/wangyi */
export async function wangYiHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/wangyi', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 网易热点2 GET /api/hot_new/wangyi2 */
export async function wangYiHotNews2UsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WangYiHotNews2UsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/hot_new/wangyi2', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
