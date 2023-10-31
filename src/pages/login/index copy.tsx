import Taro from "@tarojs/taro";
import { useState } from "react";
import { Button, Checkbox, Image } from "@nutui/nutui-react-taro";
import { login } from '@/api/me';
import "./index.scss";

import LogoSvg from '@/assets/images/logo.svg';

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const envType = Taro.getEnv();

  const handleGetPhoneNumber = async (e) => {
    if (!checked) {
      Taro.showToast({ title: '请先查看用户协议、隐私协议' });
      return;
    }

    const { code } = e.detail;

    if (!code) {
      Taro.showToast({ title: '获取用户手机号失败' });
      return;
    }

    try {
      const response = await login({ code });
      if(response.code == 500){
        Taro.showModal({ title: '当前手机号未注册代理商，请与上级代理商联系' });
        return;
      }
      const { msg, data } = response;
      Taro.setStorageSync('token', msg);
      Taro.setStorage({
        key: 'userInfo',
        data: data,
      });
      Taro.switchTab({
        url: '/pages/index/index',
      });
    } catch (error) {
      console.error('登录失败', error);
      Taro.showToast({ title: '登录失败，请重试' });
    }
  };

  return (
    <div className={`flex pt-[280px] box-border flex-col ${envType === 'WEB' ? 'h-full' : 'h-screen'} bg-white  px-4`}>
      <div>
        <div className="flex justify-center">
          <Image src={LogoSvg} width={'100%'} />
        </div>

        <div className="pt-9">
          <Button block type="primary" open-type="getPhoneNumber" onGetPhoneNumber={handleGetPhoneNumber}>
            手机号一键登录
          </Button>

          <div className="flex items-center justify-center pt-6">
            <Checkbox checked={checked} onChange={(val) => setChecked(val)}></Checkbox>
            <div className="text-xs flex items-center text-slate-600">
              我已经阅读并同意
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
