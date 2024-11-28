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
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin/Admin' },
    ],
  },
  { name: '任务中心', icon: 'table', path: '/task', component: './TableList' },
  { name: '账号中心', path: '/user/account/centre', component: './User/AccountCentre' },
  { path: '/', redirect: '/index' },
  { path: '*', layout: false, component: './404' },
];
