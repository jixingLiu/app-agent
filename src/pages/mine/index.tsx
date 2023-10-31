import { useEffect, useState } from "react";
import "./index.scss";
import Taro from "@tarojs/taro";
import { Avatar } from "@nutui/nutui-react-taro";
import { Horizontal, Right,  Message, Location2, Comment } from '@nutui/icons-react-taro'

import { formatChinesePhoneNumber } from '@/utils/index'

const Login = () => {
  const envType = Taro.getEnv()
  const [userInfo, setUserInfo] = useState<any>({})

  useEffect(() => {
    Taro.getStorage({
      key: 'userInfo',
      success: (res) => {
        setUserInfo(res?.data || {})
      }
    })
  }, [])
  
  return ( 
    <div className={`mine-wrap ${envType === 'WEB' ? 'h-full' : 'h-screen'}`}>
      <div className="pt-[126px] px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-slate-800">
            <Avatar
              size="large"
              src={userInfo?.avatar}
            />
            <div>
              <div className="text-xs flex gap-2 items-baseline">
                <span>{userInfo.name}</span>
                <span className="text-xs text-slate-600">{formatChinesePhoneNumber(userInfo.phone || '')}</span>
              </div>
              <div className="text-xs">{userInfo.agentName}</div>
            </div>
          </div>
          <div className=" flex flex-col items-end justify-between">
            <Horizontal className="text-sm inline-block" />
          </div>
        </div>
        <div className=" rounded-md bg-white shadow-slate-300 text-sm px-8 py-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Message size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">我的信息</div>
                <div className="text-slate-600">了解你的服务/系统信息</div>
              </div>
            </div>
            <Right></Right>
          </div>
          <div className="flex justify-between items-center py-4" onClick={() => {
            Taro.navigateTo({
              url: `/pages/employees/index`
            })
          }}>
            <div className="flex items-center gap-2">
              <Message size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">我的员工</div>
                <div className="text-slate-600">查看员工/管理员工</div>
              </div>
            </div>
            <Right></Right>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Location2 size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">收获地址</div>
                <div className="text-slate-600">查看详细的收货地址</div>
              </div>
            </div>
            <Right></Right>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Comment size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">客户服务</div>
                <div className="text-slate-600">迅速回答你的问题</div>
              </div>
            </div>
            <Right></Right>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Login;
