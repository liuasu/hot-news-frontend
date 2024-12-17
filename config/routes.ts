export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
      { name: '忘记密码', path: '/user/forget', component: './User/Forget' },
    ],
  },
  { path: '/index', name: '首页', icon: 'smile', component: './index' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin/user', name: '用户管理', component: './Admin/User' },
      { path: '/admin/hot-api', name: '热点接口管理', component: './Admin/HotApi' },
      { path: '/admin/prompt', name: '提示词管理', component: './Admin/Prompt' },
      { path: '/admin/log', name: '日志管理', component: './Admin/Log' },
    ],
  },
  { name: '任务中心', icon: 'table', path: '/task', component: './Task' },
  { name: '账号中心', path: '/User/account/centre', component: './User/AccountCentre' },
  { name: '我的提示词', path: '/prompt', component: './Prompt' },
  { name: '模型配置', path: '/ai_model', component: './AiModel' },
  { path: '/', redirect: '/index' },
  { path: '*', layout: false, component: './404' },
];
