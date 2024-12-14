export const userRolesMap = {
  admin: {
    color: 'blue',
    text: '管理员',
  },
  user: {
    color: 'green',
    text: '普通用户',
  },
  ban: {
    color: 'red',
    text: '封禁用户',
  },
};

/**
 * 任务状态枚举
 */
export const statusMap = {
  0: {
    color: 'blue',
    text: '已配置',
  },
  1: {
    color: 'green',
    text: '已生产',
  },
};

/**
 * 日志状态枚举
 */
export const resStatusMap = {
  0: {
    color: 'blue',
    text: '正常',
  },
  1: {
    color: 'red',
    text: '异常',
  },
};
/**
 * 热点平台枚举
 */
export const hotNewsMap = {
  toutiao: '头条',
  thepaper: '澎湃',
  wangyi: '网易',
  qq_news: '腾讯',
  thirtysix: '36氪',
};

/**
 * 第三方账号枚举
 */
export const platFormAccountMap = {
  toutiao: {
    text: '头条号',
    values: 'toutiao',
  },
  baijia: {
    text: '百家号',
    values: 'baijia',
  },
};

export const promptTemplateUtils = (text: string) => {
  return text.replace('\n', '\\n').replace('"', '\\"').replace("'", "\\'");
};
