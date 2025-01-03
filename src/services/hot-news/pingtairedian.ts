// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 腾讯新闻热点 POST /api/hot_new/qq_news */
export async function qqNewsHotNewsUsingPost(
  body: API.HotNewsQueryReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/hot_new/qq_news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 澎湃热点 POST /api/hot_new/thepaper */
export async function thePaPerHotNewsUsingPost(
  body: API.HotNewsQueryReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/hot_new/thepaper', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** 网易热点 POST /api/hot_new/wangyi */
export async function wangYiHotNewsUsingPost(
  body: API.HotNewsQueryReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/hot_new/wangyi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
