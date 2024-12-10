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
