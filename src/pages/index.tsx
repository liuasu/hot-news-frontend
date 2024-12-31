import { HotNewsCar } from '@/components/HotNewsCar';
import {
  qqNewsHotNewsUsingGet,
  thePaPerHotNewsUsingGet,
  thirtySixKrHotNewsUsingGet,
  wangYiHotNews2UsingPost,
} from '@/services/hot-news/pingtairedian';
import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
  // 澎湃 热门新闻
  const [thePaPerHotList, setThePaPerHotList] = useState<API.HotNewsVO[]>([]);
  const [thePaPerDateTime, setThePaPerDateTime] = useState<Date>();
  const thePaPerHosts = async () => {
    const res = await thePaPerHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setThePaPerHotList(res.data);
      setThePaPerDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  // 36ke 热门新闻
  const [thirtySixHotList, setThirtySixHotList] = useState<API.HotNewsVO[]>([]);
  const [thirtySixDateTime, sethirtySixDateTime] = useState<Date>();
  const thirtySixHosts = async () => {
    const res = await thirtySixKrHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setThirtySixHotList(res.data);
      sethirtySixDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  // 网易热点
  const [wangYiHotList, setWangYiHotList] = useState<API.HotNewsVO[]>([]);
  const [wangYiType, setWangYiType] = useState<API.HotApiVO[]>([]);
  const [wangYiDateTime, setWangYiDateTime] = useState<Date>();
  const [currentType, setCurrentType] = useState<API.HotApiVO | null>(null);

  // 处理类型变化
  const handleTypeChange = (type: API.HotApiVO) => {
    setCurrentType(type);
    console.log('选中的数据源:', type);
  };

  // 获取网易热点数据
  const wangYiHosts = async (platform?: string) => {
    try {
      const res = await wangYiHotNews2UsingPost({
        hotType: platform,
      } as API.HotNewsQueryReq);

      if (res.code === 0 && res.data) {
        setWangYiHotList(res.data?.newsList);
        setWangYiType(res.data?.hotType);
        setWangYiDateTime(res.currentDateTime);
        return res;
      }
    } catch (error) {
      message.error('获取数据失败');
    }
    return { code: -1, data: [] as API.HotNewsVO[] };
  };

  // 腾讯热点
  const [qqNewsHotList, setQQNewsHotList] = useState<API.HotNewsVO[]>([]);
  const [qqNewsDateTime, setQQNewsDateTime] = useState<Date>();
  const qqNewsHosts = async () => {
    const res = await qqNewsHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setQQNewsHotList(res.data);
      setQQNewsDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  useEffect(() => {
    thePaPerHosts();
    thirtySixHosts();
    wangYiHosts();
    qqNewsHosts();
  }, []);

  return (
    <PageContainer>
      <div
        style={{
          backgroundPosition: '100% -30%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '274px auto',
          backgroundImage:
            "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            padding: '0 2vw 0',
          }}
        >
          <HotNewsCar
            platFormName={'澎湃新闻'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/25/25c51ce70f264a30a54ada7b2618ef99.png?imageMogr2/auto-orient/thumbnail/!132x132r/gravity/Center/crop/132x132/quality/85/%7CimageView2/2/w/132&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:W7Qm1G5Hw3RE-MgRhEHTd110t2w='
            }
            hotList={thePaPerHotList}
            updateTime={thePaPerDateTime as Date}
            fetchData={thePaPerHosts}
            hotTypeList={wangYiType}
          />

          <HotNewsCar
            platFormName={'36氪'}
            platFormURL={
              'https://static.36krcdn.com/36kr-web/static/ic_36kr_logo_68_38@2x.187cd924.png'
            }
            hotList={thirtySixHotList}
            updateTime={thirtySixDateTime as Date}
            fetchData={thirtySixHosts}
            hotTypeList={wangYiType}
          />

          <HotNewsCar
            platFormName={'网易新闻'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/c7/c7c3339f88704b288c85b61cc6f349d1.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:vMbHfdp9MvPiir8gb49WUd-sdek='
            }
            hotList={wangYiHotList}
            updateTime={wangYiDateTime as Date}
            fetchData={wangYiHosts}
            hotTypeList={wangYiType}
            onTypeChange={handleTypeChange}
          />

          <HotNewsCar
            platFormName={'腾讯新闻'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/71/7167eb5cc0324b79a55bbd2b5b2db1ea.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:S10KK95T415aCjP2vu6DiffnWTg='
            }
            hotList={qqNewsHotList}
            updateTime={qqNewsDateTime as Date}
            fetchData={qqNewsHosts}
            hotTypeList={wangYiType}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
