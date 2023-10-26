import { useState } from "react";

import { Button, Checkbox, Image } from "@nutui/nutui-react-taro";
// import {} from  '@tarojs/components';
import "./index.scss";
import Taro from "@tarojs/taro";

import LogoSvg from '@/assets/images/logo.svg'
import React from "react";

const Login = () => {

  const [checked, setChecked ]=  useState<boolean>(true)
  const envType = Taro.getEnv()

  const handleGetPhoneNumber = (e) => {
    
    let { code } = e.detail

    console.log(code, e.detail)
    
    if (!checked) {
      Taro.showToast({title: '请先查看用户协议、隐私协议'})
      return
    }
    // Taro.login({
    //   success: function (res) {
    //     if (res.code) {
    //       console.log(res, 'res 登录成功')
    //       //发起网络请求
    //       // Taro.request({
    //       //   url: 'https://test.com/onLogin',
    //       //   data: {
    //       //     code: res.code
    //       //   }
    //       // })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

  }

  
  return (
    <div className={`flex pt-[280px] box-border flex-col ${envType === 'WEB' ? 'h-full' : 'h-screen'} bg-white  px-4` }>
      <div>
        <div className="flex justify-center">
          <Image src={LogoSvg} width={'100%'} />
        </div>
        
        <div className="pt-9">
          <Button block type="primary" open-type="getPhoneNumber" onGetPhoneNumber={handleGetPhoneNumber}>手机号一键登录</Button>

          <div className="flex items-center justify-center pt-6">
            <Checkbox checked={checked} onChange={(val) => setChecked(val)}></Checkbox>
            <div className="text-xs flex items-center text-slate-600">我已经阅读并同意 
              <span className="text-red-600">雄瑞用户协议</span>、
              <span className="text-red-600">隐私协议</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


