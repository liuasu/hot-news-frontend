import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  logo: 'logo.svg',
  title: 'Hot News 热点汇',
  navTheme: 'realDark',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorPrimary: '#1677FF',
  splitMenus: false,
};

export default Settings;
