import { RedoOutlined } from '@ant-design/icons';
import { Button, Card, Image, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React from 'react';

const calculateTimeDifference = (timestamp) => {
  const currentTime = Date.now();
  const difference = currentTime - new Date(timestamp);

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} 年前`;
  } else if (months > 0) {
    return `${months} 个月前`;
  } else if (days > 0) {
    return `${days} 天前`;
  } else if (hours > 0) {
    return `${hours} 小时前`;
  } else if (minutes > 0) {
    return `${minutes} 分钟前`;
  } else {
    return `${seconds} 秒前`;
  }
};

export const HotNewsCar: React.FC<{
  platFormName: string;
  platFormURL: string;
  hotList: API.HotNewsVO[];
  updateTime: Date;
}> = ({ platFormName, platFormURL, hotList, updateTime }) => {
  return (
    <div>
      <Card
        title={
          <>
            <Image preview={false} style={{ width: 30, height: 30 }} src={platFormURL} />
            <span>{platFormName}</span>
          </>
        }
        extra={'热门榜'}
        style={{ width: 350 }}
        actions={[
          // eslint-disable-next-line react/jsx-key
          <span>{calculateTimeDifference(updateTime)}刚刚更新</span>,
          // eslint-disable-next-line react/jsx-key
          <Button type="primary" shape="circle" icon={<RedoOutlined />} />,
        ]}
        bordered={true}
      >
        <List>
          <VirtualList
            data={hotList}
            height={250}
            itemHeight={hotList.length}
            disabled={true}
            itemKey={(item) => (item.id !== null ? item.id : item.biId)}
          >
            {(item: API.HotNewsVO, index) => (
              <List.Item key={item.id !== null ? item.id : item.biId}>
                <List.Item.Meta
                  title={
                    <>
                      <span>{index + 1}、</span>
                      <a href="">{item.title}</a>
                    </>
                  }
                />
              </List.Item>
            )}
          </VirtualList>
        </List>
      </Card>
    </div>
  );
};
