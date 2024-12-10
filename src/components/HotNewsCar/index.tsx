import { addUsingPost3 } from '@/services/hot-news/renwuzhongxin';
import { RedoOutlined } from '@ant-design/icons';
import { Button, Card, Image, List, message, Popover } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';

const calculateTimeDifference = (timestamp: Date) => {
  const currentTime = new Date().getTime();
  const targetTime = new Date(timestamp).getTime();
  const difference = currentTime - targetTime;

  // 定义时间单位（毫秒）
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  // 计算时间差
  if (difference < MINUTE) {
    return '刚刚';
  } else if (difference < HOUR) {
    const minutes = Math.floor(difference / MINUTE);
    return `${minutes}分钟前`;
  } else if (difference < DAY) {
    const hours = Math.floor(difference / HOUR);
    return `${hours}小时前`;
  }
};

export const HotNewsCar: React.FC<{
  platFormName: string;
  platFormURL: string;
  hotList: API.HotNewsVO[];
  updateTime: Date;
  fetchData: () => API.HotNewsVO[];
}> = ({ platFormName, platFormURL, hotList, updateTime, fetchData }) => {
  const [data, setData] = useState<API.HotNewsVO[]>([]);
  const [DateTime, setDateTime] = useState<Date>();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const loading = async () => {
      const res = await fetchData();
      if (res.code === 0) {
        setData(res.data);
        setDateTime(res.currentDateTime);
        message.success('刷新成功');
      } else {
        message.error('刷新失败');
      }
    };
    if (refresh) {
      loading();
      setRefresh(false);
    }
  }, [fetchData, refresh]);

  const newVar = refresh ? DateTime : updateTime;

  return (
    <div>
      <Card
        title={
          <>
            <Image preview={false} style={{ width: 25, height: 25 }} src={platFormURL} />
            <span />
            <span> {platFormName}</span>
          </>
        }
        extra={'热门榜'}
        style={{ width: 300 }}
        actions={[
          // eslint-disable-next-line react/jsx-key
          <span>{calculateTimeDifference(newVar as Date)}更新</span>,
          // eslint-disable-next-line react/jsx-key
          <Button
            type="primary"
            shape="circle"
            icon={<RedoOutlined />}
            onClick={() => {
              setRefresh(true);
            }}
          />,
        ]}
        bordered={true}
        loading={refresh}
      >
        <List split={false}>
          <VirtualList
            data={refresh ? data : hotList}
            height={250}
            itemHeight={20}
            disabled={true}
            itemKey={(item) => (item.id !== null ? item.id : item.biId)}
          >
            {(item: API.HotNewsVO, index) => (
              <List.Item key={item.id !== null ? item.id : item.biId}>
                <List.Item.Meta
                  title={
                    <>
                      <span>{index + 1}、</span>
                      <Popover
                        overlayStyle={{ width: 100 }}
                        title="操作"
                        placement="rightTop"
                        trigger="click"
                        content={
                          <div>
                            <p>
                              <a
                                rel="noreferrer"
                                onClick={async () => {
                                  try {
                                    const res = await addUsingPost3({
                                      hotNewTitle: item.title,
                                      hotPlatForm: platFormName,
                                      taskName: item.title,
                                      hotUrl: item.hotURL,
                                    });
                                    if (res.code === 0) {
                                      message.success('配置成功');
                                    } else {
                                      message.error('配置失败,' + res.message);
                                    }
                                  } catch (e) {
                                    message.error(e.message);
                                  }
                                }}
                              >
                                配置
                              </a>
                            </p>
                            <p>
                              <a href={item.hotURL} target={'_blank'} rel="noreferrer">
                                查看详情
                              </a>
                            </p>
                          </div>
                        }
                      >
                        <a>{item.title}</a>
                      </Popover>
                      {/*<a href="">{item.title}</a>*/}
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
