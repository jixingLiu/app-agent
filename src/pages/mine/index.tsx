import { useEffect, useState } from "react";
import "./index.scss";
import Taro from "@tarojs/taro";
import { Button, Image,Popup } from "@nutui/nutui-react-taro";
import {
  People,
  Right,
  Message,
  Location2,
  Scan,
  Find
} from "@nutui/icons-react-taro";

import { formatChinesePhoneNumber } from "@/utils/index";
import { getNoticeList, getAgent } from "@/api/common";
import { getAgentEmployeesById } from '@/api/me'
import MiniQrcode from '@/assets/images/mini-qrcode.jpg'

const Login = () => {
  const envType = Taro.getEnv();
  const [userInfo, setUserInfo] = useState<any>({});
  const [privacyId, setPrivacyId] = useState<string>("");
  const [secrecyId, setSecrecyId] = useState<string>("");

  const [isAgent, setIsAgent] = useState<boolean>(false)

  const [showIconPosition, setShowIconPosition] = useState<boolean>(false)

  const feetchNoticeList = async (params: noticeParams) => {
    let { rows } = await getNoticeList(params);
    return rows;
  };

  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        let storeUserinfo = res?.data
        getAgentEmployeesById(storeUserinfo?.id).then(res => {
          let { data } = res
          setUserInfo(() => data || storeUserinfo)
        })
      },
      fail: () => {
        Taro.navigateTo({
          url: "/pages/login/index",
        });
      },
    });
  }, []);
  const init = async () => {
    let listData = await feetchNoticeList({
      pageNum: 1,
      pageSize: 2,
      noticeType: 7,
      noticeTitle: "代理商-",
    });
    setPrivacyId(
      listData.find((item) => item.noticeTitle === "代理商-用户协议")
        ?.noticeId || ""
    );
    setSecrecyId(
      listData.find((item) => item.noticeTitle === "代理商-隐私协议")
        ?.noticeId || ""
    );
  };

  useEffect(() => {
    init()
  }, []);

  useEffect(() => {
    if (!userInfo?.phone) return
    getAgent({contactPhone: userInfo.phone}).then((res) => {
      let { rows } = res
      if (rows.length) {
        setIsAgent(true)
        return
      } 
      setIsAgent(false)
    })
  }, [userInfo])


  return (
    <div className={`mine-wrap ${envType === "WEB" ? "h-full" : "h-screen"}`}>
      <div className="banner-card px-4 pt-8 pb-4 shadow-blue-200 shadow-xl relative">
        <div className="flex items-center gap-3 text-white mb-4">
          <div className="rounded-full overflow-hidden">
            <Image
              width={56}
              height={56}
              className="rounded-full"
              src={userInfo?.avatar}
            />
          </div>
          <div className="flex-1">
            <div className="text-sm flex gap-2 mb-1 items-center">
              <span>{userInfo.name}</span>
              <span className="px-2 leading-4 bg-blue-600 text-white rounded-full text-[24px]">
                {userInfo.type === "subAdmin" ? "管理员" : "普通员工"}
              </span>
              <span className="text-xs text-white" onClick={() => {
                Taro.makePhoneCall({
                  phoneNumber: userInfo.phone
                })
              }}>{formatChinesePhoneNumber(userInfo.phone || '')}</span>
            </div>
            <div className="text-xs leading-6">
              <span>公司名称:</span>
              <span className=" ">{userInfo.agentName}</span>
            </div>
            <div className="text-xs left-6 overflow-hidden line-clamp-2">
              <span>代理区域:</span>
              <span className=" ">{userInfo.regionName?.join(",")}</span>
            </div>
          </div>
        </div>


        <div className=" absolute right-4 top-3">
          <Scan className="text-white" onClick={() => {
            setShowIconPosition(true)
          }} />
        </div>
      </div>
      <div className="px-3 pt-6">
        <div className=" rounded-md shadow-md bg-white text-xs px-2 py-4">
          {
            isAgent && (
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-2" onClick={() => {
                  // 尝试打开 App
                  window.location.href = 'sungrow://'

                  // 检查设备是否打开了 App
                  setTimeout(function() {
                      // 如果一定时间后仍然停留在本页面，认为未安装 App，跳转到下载页面
                      window.location.href = 'https://m.isolarcloud.com/download.html';
                  }, 3000); // 2.5秒后检查
                  //  Taro.showToast({
                  //   title: '请打开阳光云APP查看收益',
                  //  })
                  }
                }>
                  <Find size={32} color="#2563eb" />
                  <div>
                    <div className=" text-slate-800">我的收益</div>
                    <div className="text-slate-600">了解你的收益/阳光云</div>
                  </div>
                </div>
                <Right></Right>
              </div>
            )
          }
          
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <Message size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">我的信息</div>
                <div className="text-slate-600">了解你的服务/系统信息</div>
              </div>
            </div>
            <Right></Right>
          </div>
          {
            userInfo?.type === 'subAdmin' && (
              <div
                className="flex justify-between items-center py-2"
                onClick={() => {
                  Taro.navigateTo({
                    url: `/pages/employees/index`,
                  });
                }}
              >
                <div className="flex items-center gap-3">
                  <People size={32} color="#2563eb" />
                  <div>
                    <div className=" text-slate-800">我的员工</div>
                    <div className="text-slate-600">查看员工/管理员工</div>
                  </div>
                </div>
                <Right></Right>
              </div>
            )
          }

          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <Location2 size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">收获地址</div>
                <div className="text-slate-600">查看详细的收货地址</div>
              </div>
            </div>
            <Right></Right>
          </div>
        </div>
      </div>
      <div className="px-3 pt-4">
        <Button
          block
          type="primary"
          onClick={() => {
            Taro.removeStorageSync("token");
            Taro.removeStorage({
              key: "userInfo",
              success: () => {
                Taro.navigateTo({
                  url: "/pages/login/index",
                });
              },
            });
          }}
        >
          登出
        </Button>
      </div>
      <div className="pt-6 px-3">
        <div className="felx justify-center text-center items-center text-xs gap-0 text-slate-800">
          <span
            className="text-red-600"
            onClick={() => {
              if (!privacyId) {
                return
              }
              Taro.navigateTo({
                url: `/pages/article/index?id=${privacyId}&type=protocol`,
              });
            }}
          >
            《用户协议》
          </span>
          <span>和</span>
          <span
            className="text-red-600"
            onClick={() => {
              if (!secrecyId) {
                return
              }
              Taro.navigateTo({
                url: `/pages/article/index?id=${secrecyId}&type=protocol`,
              });
            }}
          >
            《隐私协议》
          </span>
        </div>
      </div>

      <Popup closeable visible={ showIconPosition } style={{ height: '50%' }} closeIconPosition="bottom-right" position="top" onClose={ () => { setShowIconPosition(false) } } >
        <div className="py-4 px-4">
          <Image src={MiniQrcode} className="w-full" />
        </div>
      </Popup>
    </div>
  );
};

export default Login;
