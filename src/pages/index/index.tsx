import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { Image, NoticeBar, Divider, Swiper, Grid } from "@nutui/nutui-react-taro";
import "./index.scss";
import avatarImage from '@/assets/images/avatar.jpg'
import { IconFont, Message } from "@nutui/icons-react-taro";


const Index = () => {
  const envType = Taro.getEnv()
  const [userInfo, setUserInfo] = useState<any>({})

  const tools = [
    {
      name: '安装申请',
      iconName: 'shenqingquanxian',
      url: '/pages/apply/index'
    },
    {
      name: '电站安装',
      iconName: 'anzhuang',
      url: '/pages/install/index'
    },
    {
      name: '收益测算',
      iconName: 'shouyi',
      url: '/pages/roi-calculator/index'
    },
    {
      name: '我的员工',
      iconName: 'yuangong',
      url: '/pages/employees/index'
    }
  ]

  useEffect(() => {
    Taro.getStorage({
      key: 'userInfo',
      success: (res) => {
        setUserInfo(res?.data || {})
      },
      fail: (res) => {
        console.log('本地缓存获取失败：' + res.errMsg);
        Taro.clearStorage();
        Taro.redirectTo({
          url: '/pages/login/index'
        });
      }
    });
  }, [])

  

  const list = [
    'https://img1.baidu.com/it/u=599200905,2323187899&fm=253&fmt=auto&app=138&f=JPEG?w=222&h=166',
    'https://img1.baidu.com/it/u=599200905,2323187899&fm=253&fmt=auto&app=138&f=JPEG?w=222&h=166',
    'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/baike/s=220/sign=a7128e9f44086e066ea8384932097b5a/eaf81a4c510fd9f9c8a147c72d2dd42a2934a4ed.jpg'
  ]

  return (
    <div className={`index-wrap ${envType === 'WEB' ? 'h-full' : 'h-screen'}`}>
      <div className="pt-9 pb-6 px-4 bg-[#f5f6f7]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-slate-800">
            <Image 
              src={avatarImage}
              mode="scaleToFill"
              width="76"
              height="76"
              radius="50%"
              error={<Image src={avatarImage} />}
              ></Image>
            
            <div className="flex-1">
              <div className="text-sm flex gap-2 h-6 items-center">
                <span><span className="text-slate-600">欢迎你，</span>{userInfo.name}</span>
                {/* <span className=" text-xs text-slate-600">（{userInfo.phone || ''})</span> */}
              </div>
              <div className=" flex gap-2 items-center h-6">
                <span className="text-sm"><span className="text-slate-600">你的代理商：</span>{userInfo.agentName}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center leading-6 text-xs text-slate-600">
          <div>
            <div className="text-blue-800 text-base">0</div>
            <div>电站数量</div>
          </div>
          <div>
            <div className="text-blue-800 text-base">0</div>
            <div>建设中</div>
          </div>
          <div>
            <div className="text-blue-800 text-base">0</div>
            <div>审核中</div>
          </div>
        </div>
      </div>
      <NoticeBar
        content="雄瑞小太阳小程序正式上线。"
        scrollable
      />
     

      <div className="px-4 py-2">
        <div className=" text-sm font-normal text-slate-800 pb-1">热门推荐</div>
        <Swiper defaultValue={0} indicator  height={169}>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img style={{ width: '100%' }} src={item} onClick={() => console.log(index)} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      {/* <div className="grid grid-cols-3 gap-2 text-sm text-slate-600 text-center px-4">
        <div>
          <IconFont size={32} fontClassName="iconfont" classPrefix="icon" name="shenqing" />
          <div className="text-xs">安装申请</div>
        </div>
        <div>
          <IconFont size={32} fontClassName="iconfont" classPrefix="icon" name="anzhuang" />
          <div className="text-xs">电站安装</div>
        </div>
        <div>
          <IconFont size={32} fontClassName="iconfont" classPrefix="icon" name="shouyi" />
          <div className="text-xs">收益测算</div>
        </div>
      </div> */}
    
      <div>
        <Grid columns={2} direction="horizontal">
          {
            tools.map((item, index) => {
              return (
                <Grid.Item key={index} text={item.name} onClick={() => {
                  Taro.navigateTo({
                    url: item.url
                  })
                }}>
                  <IconFont size={32} fontClassName="iconfont" classPrefix="icon" name={item.iconName} />
                </Grid.Item>
              )
            })
          }
        </Grid>
      </div>
    </div>
  );
};

export default Index;
