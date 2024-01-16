import Taro from "@tarojs/taro";
import { useEffect, useRef, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Image,
  CountDown,
} from "@nutui/nutui-react-taro";
import { login, loginSend } from "@/api/me";
import "./index.scss";

import LogoSvg from "@/assets/images/logo.png";
import { getNoticeList } from "@/api/common"

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const envType = Taro.getEnv();
  const [form] = Form.useForm();

  const countDownRef = useRef<any>();

  const [privacyId, setPrivacyId] = useState<string>("");
  const [secrecyId, setSecrecyId] = useState<string>("");

  const [isSending, setIsSending] = useState<boolean>(false);

  const [formData, setFormData] = useState<loginParams>({
    phone: "",
    inputCode: "",
  });
  const onFinish = async (values) => {
    let { phone, inputCode } = formData;
    if (!checked) {
      Taro.showToast({ title: "请先查看用户协议、隐私协议" });
      return;
    }
    if (!phone || !inputCode) {
      Taro.showToast({ title: "请先输入用户名和验证码码！" });
      return
    }

    try {
      const response = await login({ phone, inputCode });
      const { msg, data } = response;

      if (Number(data?.code) === 500) {
        Taro.showModal({ title: data?.msg || "当前手机号未注册代理商，请与上级代理商联系" });
        return;
      }
      Taro.setStorageSync("token", msg);
      Taro.setStorage({
        key: "userInfo",
        data: data,
      });
      Taro.switchTab({
        url: "/pages/index/index",
      });
    } catch (error) {
      console.error("登录失败", error);
      Taro.showToast({ title: "登录失败，请重试" });
    }
  };

  const getVerifyPhoneCode = () => {
    console.log(formData.phone);
    if (!formData.phone) {
      Taro.showToast({ title: "请输入手机号" });
      return;
    }
    setIsSending(true);
    loginSend({ phone: formData.phone }).then(() => {
      countDownRef.current?.start();
    });
  };

  const feetchNoticeList = async (params: noticeParams) => {
    let { rows } = await getNoticeList(params);
    return rows;
  };

  const init = async () => {
    let listData = await feetchNoticeList({
      pageNum: 1,
      pageSize: 2,
      status: 1,
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

  return (
    <div
      className={`flex pt-[96px] box-border flex-col ${
        envType === "WEB" ? "h-full" : "h-screen"
      } bg-white  px-4`}
    >
      <div>
        <div className="flex justify-centertime={20000}">
          <Image src={LogoSvg} width={"100%"} />
        </div>

        <div className="pt-4">
          <Form
            labelPosition="top"
            footer={
              <Button block type="primary" onClick={onFinish}>
                提交
              </Button>
            }
          >
            <Form.Item label="联系电话" name="phone">
              <Input
                maxLength={13}
                value={formData.phone}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    phone: value
                  })
                }}
                placeholder="请输入电话号码"
                type="mobile"
              />
            </Form.Item>
            <Form.Item label="验证码" name="inputCode">
              <div className="flex justify-between items-center">
                <Input
                  onChange={(value) => {
                    setFormData({
                      ...formData,
                      inputCode: value
                    })
                  }}
                  value={formData.inputCode}
                  maxLength={6}
                  placeholder="短信验证码"
                  type="number"
                />
                <Button
                  type="primary"
                  size="small"
                  onClick={getVerifyPhoneCode}
                >
                  {isSending ? (
                    <CountDown
                      style={{color: '#fff'}}
                      onEnd={() => {
                        setIsSending(false);
                      }}
                      autoStart={false}
                      ref={countDownRef}
                      time={60 * 2000}
                      format="剩余ss秒"
                    />
                  ) : (
                    "获取验证码"
                  )}
                </Button>
              </div>
            </Form.Item>

            <div className="flex items-center justify-center pt-6">
              <Checkbox
                checked={checked}
                onChange={(val) => setChecked(val)}
              ></Checkbox>
              <div className="text-xs flex items-center text-slate-600">
                我已经阅读并同意
                <span className="text-red-600"
                  onClick={() => {
                    if (!privacyId) {
                      return
                    }
                    Taro.navigateTo({
                      url: `/pages/article/index?id=${privacyId}&type=protocol`,
                    });
                  }}
                >雄瑞用户协议</span>、
                <span className="text-red-600"
                  onClick={() => {
                    if (!secrecyId) {
                      return
                    }
                    Taro.navigateTo({
                      url: `/pages/article/index?id=${secrecyId}&type=protocol`,
                    });
                  }}
                >隐私协议</span>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
