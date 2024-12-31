// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 文章生成 POST /api/production/article */
export async function productionArticleUsingPost(
  body: API.ProductionArticleAddReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/production/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 托管 POST /api/production/trusteeship */
export async function aiTrusteeshipUsingPost(
  body: API.ProductionTrusteeshipAddReq,
  options?: { [key: string]: any },
) {
  return request<any>('/api/production/trusteeship', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
