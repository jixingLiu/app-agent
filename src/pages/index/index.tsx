import { useEffect, useState } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import {
  Image,
  NoticeBar,
  Grid,
  ConfigProvider,
} from "@nutui/nutui-react-taro";
import { Swiper } from '@nutui/nutui-react';
import "./index.scss";
import { IconFont, Notice } from "@nutui/icons-react-taro";
import { getNoticeList } from "@/api/common";
import { getAgentEmployeesById } from '@/api/me'

import { formatDate } from "@/utils";

let incomeTools = {
  name: "收益测算",
  iconName: "shouyi",
  url: "/pages/roi-calculator/index",
  isRemote: true,
  listName: "incomeList",
};

const Index = () => {
  const envType = Taro.getEnv();
  const [userInfo, setUserInfo] = useState<any>({});
  const [notices, setNotices] = useState<any[]>([]);
  const [bannerList, setBannerList] = useState<any[]>([]);
  const [recommend, setRecommend] = useState<any[]>([]);
  const [incomeList, setIncomeList] = useState<any>({});

  const [caseList, setCaseList] = useState<any[]>([]);
  const [current, setCurrent] = useState(1)

  const tools = [
    {
      name: "安装申请",
      iconName: "shenqingquanxian",
      url: "/pages/apply/index",
    },
    {
      name: "电站安装",
      iconName: "anzhuang",
      url: "/pages/install/index",
    },
    {
      name: "我的员工",
      iconName: "yuangong",
      url: "/pages/employees/index",
    },
    // {
    //   name: "收益测算",
    //   iconName: "shouyi",
    //   url: "/pages/roi-calculator/index",
    // },
  ];
  useLaunch(() => {
    console.log("useLaunch");
  })
  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        let storeUserinfo = res?.data
        getAgentEmployeesById(storeUserinfo?.id).then(res => {
          let { data } = res
          setUserInfo(() => data || storeUserinfo)
        }).catch( () => {
          setUserInfo( () => storeUserinfo)
        })

        // console.log('userinfo')
        // setUserInfo(res?.data || {});
      },
      fail: (res) => {
        console.log("本地缓存获取失败：" + res.errMsg);
        Taro.clearStorage();
        Taro.redirectTo({
          url: "/pages/login/index",
        });
      },
    });
  }, []);

  const fetchNoticeList = async (params: noticeParams) => {
    let { rows } = await getNoticeList(params);
    return rows;
  };
  const init = async () => {
    let NoticesData = await fetchNoticeList({
      pageNum: 1,
      pageSize: 5,
      status: 1,
      noticeType: 2,
    });
    let bannerData = await fetchNoticeList({
      pageNum: 1,
      pageSize: 6,
      status: 1,
      noticeType: 3,
    });
    setNotices(NoticesData);
    setBannerList(bannerData);
    let recommendData = await fetchNoticeList({
      pageNum: 1,
      status: 1,
      pageSize: 6,
      noticeType: 5,
    });
    setRecommend(recommendData);

    let caseData = await fetchNoticeList({
      pageNum: 1,
      pageSize: 6,
      status: 1,
      noticeType: 8,
    });
    setCaseList(() => [...caseData]);

    let income = await fetchNoticeList({
      pageNum: 1,
      pageSize: 1,
      noticeTitle: "收益测算",
      noticeType: 7,
    });
    setIncomeList(income[0] || {});
  };

  useEffect(() => {
    init();
  }, []);

  const handleArticle = (item: any) => {
    if (item.url) {
      window.open(item.url);
      return;
    }
    Taro.navigateTo({
      url: `/pages/article/index?id=${item.noticeId}`,
    });
  };

  return (
    <div className={`index-wrap ${envType === "WEB" ? "h-full" : "h-screen"}`}>
      <div>
        <Swiper defaultValue={0} indicator height={169}>
          {bannerList.map((item, index) => {
            return (
              <Swiper.Item key={(item.id || index)}>
                <img
                  style={{ width: "100%" }}
                  src={item.coverImage}
                  onClick={(e) => {
                    e.preventDefault();
                    handleArticle(item);
                  }}
                  alt=""
                />
              </Swiper.Item>
            );
          })}
        </Swiper>

        <Grid columns={incomeList.status !== "1" ? 3 :4}>
          {tools.map((item, index) => {
            return (
              <Grid.Item
                key={index}
                text={item.name}
                onClick={() => {
                  Taro.navigateTo({
                    url: item.url,
                  });
                }}
              >
                <IconFont
                  size={32}
                  fontClassName="iconfont"
                  classPrefix="icon"
                  name={item.iconName}
                />
              </Grid.Item>
            );
          })}
           {
            incomeList.status === "1" && (
              <Grid.Item
                key={"income"}
                text={"收益测算"}
                onClick={() => {
                  Taro.navigateTo({
                    url: incomeTools.url,
                  });
                }}
              >
                <IconFont
                  size={32}
                  fontClassName="iconfont"
                  classPrefix="icon"
                  name={incomeTools.iconName}
                />
              </Grid.Item>
            )
          }
        </Grid>
      </div>
      <ConfigProvider 
        theme={{
          nutuiNoticebarBackground: '#fff',
          nutuiNoticebarColor: '#dc2626'
        }}
      >
        <NoticeBar
          direction="vertical"
          speed={10}
          duration={2000}
          leftIcon={<Notice />}
          list={notices?.map((item) => item.noticeTitle)}
        />
      </ConfigProvider>
      

      <div className="px-3 py-2">
      <div className=" text-sm font-normal text-slate-800 pt-2 pb-2 flex justify-between items-baseline">
          <span>成功案例</span>
          <span className=" text-xs text-gray-600 underline-gray-50" onClick={() => {
            Taro.navigateTo({
              url: '/pages/article-list/index',
            })
          }}>更多</span>
        </div>
        <div className="gap-4">
          {
            caseList?.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  handleArticle(item);
                }}
                className=" box-border shadow-md shadow-light-600 mb-4"
                >
                  <Image
                    className="overflow-hidden block rounded-sm w-full aspect-[5/2]"
                    src={item.coverImage}
                  ></Image>
                  <div className="text-xs py-2  px-2 text-slate-800 text-ellipsis overflow-hidden line-clamp-1">
                    {item.noticeTitle}
                  </div>
                </div>
            ))
          }
        </div>

        <div className=" text-sm font-normal text-slate-800 pt-2 pb-2">
          热门推荐
        </div>
        <div className="gap-2">
          {recommend?.map((item, index) => {
            if (index < 1) {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    handleArticle(item);
                  }}
                  className=" shadow-white mb-4"
                >
                  <Image
                    className="overflow-hidden rounded-md w-full aspect-[5/2]"
                    src={item.coverImage}
                  ></Image>
                </div>
              )
            }
            return (
              <div
                key={item.id}
                onClick={() => {
                  handleArticle(item);
                }}
                className=" shadow-white flex gap-2 mb-4"
              >
                <Image
                  className="overflow-hidden rounded-sm w-20 aspect-[4/3]"
                  src={item.coverImage}
                ></Image>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="text-sm text-slate-800 text-ellipsis line-clamp-2">
                    {item.noticeTitle}
                  </div>
                  <div className="text-xs text-gray-300">{formatDate(new Date(item.updateTime), 'YYYY年MM月DD日')}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
