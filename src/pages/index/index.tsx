import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import {
  Image,
  NoticeBar,
  Swiper,
  Grid,
  ConfigProvider,
} from "@nutui/nutui-react-taro";
import "./index.scss";
import { IconFont, Notice } from "@nutui/icons-react-taro";
import { getNoticeList } from "@/api/common";
import { formatDate } from "@/utils";

const Index = () => {
  const envType = Taro.getEnv();
  const [userInfo, setUserInfo] = useState<any>({});
  const [notices, setNotices] = useState<any[]>([]);
  const [bannerList, setBannerList] = useState<any[]>([]);
  const [recommend, setRecommend] = useState<any[]>([]);

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
    {
      name: "收益测算",
      iconName: "shouyi",
      url: "/pages/roi-calculator/index",
    },
  ];

  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        setUserInfo(res?.data || {});
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

  const feetchNoticeList = async (params: noticeParams) => {
    let { rows } = await getNoticeList(params);
    return rows;
  };
  const init = async () => {
    let NoticesData = await feetchNoticeList({
      pageNum: 1,
      pageSize: 5,
      noticeType: 2,
    });
    let bannerData = await feetchNoticeList({
      pageNum: 1,
      pageSize: 6,
      noticeType: 3,
    });
    setNotices(NoticesData);
    setBannerList(bannerData);
    let recommendData = await feetchNoticeList({
      pageNum: 1,
      pageSize: 6,
      noticeType: 5,
    });
    setRecommend(recommendData);
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
              <Swiper.Item key={item.id}>
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

        <Grid columns={4}>
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
                  <div className="text-xs text-gray-300">{formatDate(new Date(item.updateTime), 'YYYY-MM-DD')}</div>
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
