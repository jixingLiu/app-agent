import { useEffect, useState } from "react";
import "./index.scss";
import Taro from "@tarojs/taro";
import { Image } from "@nutui/nutui-react-taro";
import { People, Right,  Message, Location2, Scan } from '@nutui/icons-react-taro'

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
      <div className="banner-card px-4 pt-10 pb-6 shadow-blue-200 shadow-xl relative">
        <div className="flex items-center gap-3 text-white mb-4">
          <div className="rounded-full overflow-hidden">
            <Image
              width={76}
              height={76}
              className="rounded-full"
              src={userInfo?.avatar}
            />
          </div>
          <div className="flex-1">
            <div className="text-sm flex gap-2 mb-2 items-baseline">
              <span>{userInfo.name}</span>
              <span className="px-2 leading-4 bg-blue-600 text-white rounded-full text-[12px]">{userInfo.type === 'subAdmin' ? '管理员': '普通员工'}</span>
              {/* <span className="text-xs text-slate-600">{formatChinesePhoneNumber(userInfo.phone || '')}</span> */}
            </div>
            <div className="text-xs left-6">你的代理商:{userInfo.agentName}</div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-1 text-center leading-5 text-xs text-white'>
          <div className="flex items-center gap-1">
            <div>电站收益:</div>
            <div>10000元</div>
          </div>
          <div className="flex items-center gap-1">
            <div>年收益:</div>
            <div>10000元</div>
          </div>
        </div>

        <div className=" absolute right-4 top-1">
          <Scan className="text-white" />
        </div>
      </div>
      <div className="py-4 px-3">
        <div className=" shadow-md grid grid-cols-5 text-center gap-1 bg-white px-2 py-2 rounded-md text-xs text-slate-800">
          <div>
            <div className='text-base leading-6'>10</div>
            <div>电站数</div>
          </div>
          <div>
            <div className='text-base leading-6'>0</div>
            <div>申请中</div>
          </div>
          <div>
            <div className=' text-base leading-6'>0</div>
            <div>设计中</div>
          </div>
          <div>
            <div className=' text-base leading-6'>0</div>
            <div>已验收</div>
          </div>
          <div>
            <div className=' text-base leading-6'>0</div>
            <div>已废弃</div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className=" rounded-md shadow-md bg-white text-xs px-2 py-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <Message size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">我的信息</div>
                <div className="text-slate-600">了解你的服务/系统信息</div>
              </div>
            </div>
            <Right></Right>
          </div>
          <div className="flex justify-between items-center py-2" onClick={() => {
            Taro.navigateTo({
              url: `/pages/employees/index`
            })
          }}>
            <div className="flex items-center gap-2">
              <People size={32} color="#2563eb" />
              <div>
                <div className=" text-slate-800">我的员工</div>
                <div className="text-slate-600">查看员工/管理员工</div>
              </div>
            </div>
            <Right></Right>
          </div>
          <div className="flex justify-between items-center py-2">
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
      <div className="pt-6 px-3">
        <div className="felx justify-center text-center items-center text-xs gap-0 text-slate-800">
          <span className="text-red-600">《用户协议》</span>
          <span>和</span>
          <span className="text-red-600">《隐私协议》</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
