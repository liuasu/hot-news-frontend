import { addUsingPost3 } from '@/services/hot-news/renwuzhongxin';
import { DownOutlined, RedoOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Dropdown,
  Image,
  List,
  MenuProps,
  message,
  Popover,
  Space,
  Typography,
} from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';

/**
 * 计算时间差的工具函数
 * @param timestamp 要计算的时间戳
 * @returns 格式化后的时间差字符串
 */
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

// 定义组件的 Props 类型
export const HotNewsCar: React.FC<{
  platFormName: string; // 平台名称
  platFormURL: string; // 平台图标 URL
  hotList: API.HotNewsVO[]; // 热点新闻列表
  hotTypeList: API.HotApiVO[]; // 热点类型列表
  updateTime: Date; // 更新时间
  fetchData: (platform?: string) => Promise<any>; // 获取数据的函数
  onTypeChange?: (type: API.HotApiVO) => void; // 添加类型切换回调
}> = ({
  platFormName,
  platFormURL,
  hotList,
  hotTypeList = [],
  updateTime,
  fetchData,
  onTypeChange,
}) => {
  // 组件内部状态
  const [data, setData] = useState<API.HotNewsVO[]>([]); // 存储刷新后的数据
  const [DateTime, setDateTime] = useState<Date>(); // 存储刷新后的时间
  const [refresh, setRefresh] = useState(false); // 控制刷新状态

  // 监听刷新状态，当需要刷新时获取新数据
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

  // 确定显示哪个时间（刷新后的时间或初始时间）
  const newVar = refresh ? DateTime : updateTime;

  // 处理下拉菜单点击事件
  const onClick: MenuProps['onClick'] = async ({ key }) => {
    try {
      // 查找选中的类型
      const selectedType = hotTypeList.find((item) => item.platform === key);
      if (!selectedType) return;

      // 通知父组件类型变化
      onTypeChange?.(selectedType);

      // 设置加载状态
      // setRefresh(true);

      // 获取新数据
      const res = await fetchData(key);
      if (res.code === 0) {
        setData(res.data?.newsList || res.data);
        setDateTime(res.currentDateTime);
      }
    } catch (error) {
      message.error('请求失败');
    }
  };

  // 渲染组件
  return (
    <div>
      <Card
        // 卡片标题部分：包含平台图标、名称和下拉菜单
        title={
          <>
            <Image preview={false} style={{ width: 25, height: 25 }} src={platFormURL} />
            <span style={{ marginLeft: 8 }}>{platFormName}</span>
            <Dropdown
              trigger={['hover']}
              menu={{
                selectable: true, // 启用选择功能
                items: Array.isArray(hotTypeList)
                  ? hotTypeList.map((item) => ({
                      key: item.platform,
                      label: item.apiName.replace('网易', ''),
                    }))
                  : [],
                onClick,
              }}
            >
              <Typography.Link style={{ marginLeft: 16 }}>
                <Space>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
          </>
        }
        extra={'热门榜'}
        style={{ width: 300 }}
        // 卡片底部操作区
        actions={[
          <span>{calculateTimeDifference(newVar as Date)}更新</span>,
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
        {/* 使用虚拟列表展示热点新闻 */}
        <List split={false}>
          <VirtualList
            data={refresh ? data : hotList}
            height={450}
            itemHeight={20}
            disabled={true}
            itemKey={(item) => (item.id !== null ? item.id : item.biId)}
          >
            {/* 渲染每条新闻 */}
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
