// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** bilibili热点 GET /api/hot_new/bilibili */
export async function biLiBiLiHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/bilibili', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 抖音热点 GET /api/hot_new/dy */
export async function dyHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/dy', {
    method: 'GET',
    ...(options || {}),
  });
}

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

/** 头条热点 GET /api/hot_new/toutiao */
export async function touTiaoHotNewsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListHotNewsVO_>('/api/hot_new/toutiao', {
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
