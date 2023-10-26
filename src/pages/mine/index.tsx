import { useState } from "react";
import { clsx } from "clsx";
import "./index.scss";
import Taro from "@tarojs/taro";
import { Avatar } from "@nutui/nutui-react-taro";
import { Horizontal, Right,  Message, Location2, Comment } from '@nutui/icons-react-taro'

const Login = () => {
  const envType = Taro.getEnv()
  
  return ( 
    <div className={`mine-wrap ${envType === 'WEB' ? 'h-full' : 'h-screen'}`}>
      <div className="pt-[126px] px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-slate-800">
            <Avatar
              size="large"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
            <div>
              <div className="text-xs flex gap-2 items-baseline">
                <span>张三</span>
                <span className="text-xs text-slate-600">15198911111</span>
              </div>
              <div className="text-xs">云南雄瑞光伏科技有限公司</div>
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
