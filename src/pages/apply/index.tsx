import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Cascader, Radio, Button, CountDown } from "@nutui/nutui-react-taro";

import { getAreaCode } from "@/api/common";
import "./index.scss";
import Taro, { useLaunch } from "@tarojs/taro";
import { updateInstall } from "@/api/install";
import { login, loginSend } from "@/api/me";
const Apply = () => {
  const [form] = Form.useForm();
  const [visible, setIsVisible] = useState<boolean>(false);
  const [areaCodes, setAreaCodes] = useState<any[]>([]);
  const [address, setAddress] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [inputCode, setInputCode] = useState<string | number>('');
  
  const [isSending, setIsSending] = useState<boolean>(false);
  const countDownRef = useRef<any>();

  const [custmerCityData, setCustmerCityData] = useState<any[]>([]);

  useLaunch(() => {
    getUserInfo()
  })

  useEffect(() => {
    getUserInfo()
  }, []);

  const hanldeChooseAddree = async () => {
    let params = {
      pcode: 0,
      filterRegionIds: userInfo?.regionCode?.join(',')
    };
    let res = await getAreaCodeList(params);
    setCustmerCityData(res);
    setIsVisible(true);
  };

  const handleFinish = async () => {
    let values = form.getFieldsValue(true) || {}
    let { financialProduct, ownerName, ownerPhone, regionCode } = values
    if (ownerPhone && !ownerName) return

    if (!financialProduct || !ownerName || !ownerPhone || !regionCode || !address || !inputCode) {
      Taro.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }
    if (!userInfo?.regionCode?.includes(regionCode)) {
      Taro.showToast({
        title: '请选择正确的区域',
        icon: 'none'
      })
      return
    }
    
    let res = await login({
      inputCode: inputCode,
      phone: values.ownerPhone,
      isVerify: true
    })
    if (!res) {
      Taro.showToast({
        title: '验证码错误',
        icon: 'none'
      })
      return
    }
    

    let params = Object.assign(
      {
        agentId: userInfo.agentId,
        agentName: userInfo.agentName,
      },
      {
        ...values,
        address: `${address}${values.address}`,
      }
    );
    console.log(params, 'params');
    updateInstall(params).then((res) => {
      Taro.showToast({
        title: "提交成功",
        icon: "success",
        duration: 2000,
      });
      Taro.navigateTo({
        url: "/pages/install/index",
      });
    });
  };

  const getAreaCodeList = async (params) => {
    let { data } = await getAreaCode(params);
    return data.map((item) => ({
      ...item,
      value: item.code,
      text: item.name,
    }));
  };

  const lazyLoadList = async (node: any, resolve: (children: any) => void) => {
    let params = {
      pcode: node.value || 0,
      filterRegionIds: userInfo?.regionCode?.join(',')
    };
    console.log(userInfo, 'userInfo')
    let res = await getAreaCodeList(params);
    resolve(res);
  };


  const getVerifyPhoneCode = () => {
    let phone = form.getFieldValue('ownerPhone')
    if (!phone) {
      Taro.showToast({ title: "请输入手机号" });
      return;
    }
    setIsSending(true);
    loginSend({ phone: phone }).then(() => {
      countDownRef.current?.start();
    });
  };
  const getUserInfo = () => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        setUserInfo(() => (res?.data || {}));
        // form.setFieldsValue('ownerPhone', res?.data?.phone)
        console.log( res?.data?.phone, ' res?.data--')
      },
      fail: (res) => {
        // Taro.navigateTo({
        //   url: '/pages/login/index'
        // })
        console.log("本地缓存获取失败：" + res.errMsg);
      },
    });
  }

 

  return (
    <div className="py-2">
      <Form
        divider
        labelPosition="left"
        className="text-right"
        // onFinish={handleFinish}
        form={form}
        footer={
          <Button block type="primary" onClick={handleFinish}>
            提交
          </Button>
        }
      >
        <Form.Item label="建站类型" name="financialProduct">
          <Radio.Group direction="horizontal" onChange={(value) => {
            form.setFieldsValue({
              financialProduct: value
            })
            
          }}>
            <Radio value="贷款建站" shape="button">贷款建站</Radio>
            <Radio value="租赁建站" shape="button">租赁建站</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="姓名" name="ownerName">
          <Input placeholder="请输入姓名" maxLength={6} />
        </Form.Item>
        <Form.Item label="手机号" name="ownerPhone">
          <Input placeholder="请输入手机号" maxLength={13} />
        </Form.Item>
        <Form.Item label="验证码" name="inputCode">
          <div className="flex justify-between items-center gap-2">
            <Input onChange={(value) => {
              setInputCode(value)
            }} placeholder="请输入验证码" maxLength={6} />

            <Button type="primary" size="small" onClick={getVerifyPhoneCode}>
              {isSending ? (
                <CountDown
                  style={{ color: "#fff" }}
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
        <Form.Item
          label="安装区县"
          name="regionCode"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          <div className=" text-slate-500" onClick={hanldeChooseAddree}>
            {address ? (
              <span className="text-gray-800">{address}</span>
            ) : (
              <span className="text-slate-400">选择安装区县</span>
            )}
          </div>
        </Form.Item>
        <Form.Item label="详细地址" name="address">
          <Input placeholder="请输入详细地址" />
        </Form.Item>
      </Form>
      {
        userInfo?.phone && (
          <Cascader
            visible={visible}
            title="选择安装区县"
            options={custmerCityData}
            onClose={() => setIsVisible(false)}
            lazy
            closeable
            onLoad={lazyLoadList}
            onChange={(value, path) => {
              setAreaCodes(value);
              console.log(path.map((item) => item.name)?.join(""), 'path.map((item) => item.name)?.join("")')
              setAddress(path.map((item) => item.name)?.join(""));
              let lastItem = path[path.length - 1];
              if (path.length >= 4) {
                lastItem = path[path.length - 2];
              }
              
              form.setFieldsValue({
                regionCode: lastItem.code,
                regionName: lastItem.name,
              });
            }}
          />
        )
      }
      
    </div>
  );
};

export default Apply;
