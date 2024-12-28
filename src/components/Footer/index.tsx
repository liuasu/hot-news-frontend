import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div
      style={{
        padding: '16px',
        position: 'relative', // 改为相对定位
        width: '100%',
        height: '60px',
      }}
    >
      <DefaultFooter
        style={{
          background: 'none',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        links={[
          {
            key: 'github',
            title: <GithubOutlined />,
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
          },
        ]}
      />
    </div>
  );
};

export default Footer;
