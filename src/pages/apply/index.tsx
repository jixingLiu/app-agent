import React, { useEffect, useState } from "react";
import { Form, Input, Cascader, Button } from "@nutui/nutui-react-taro";

import { getAreaCode } from "@/api/common";
import "./index.scss";
import Taro from "@tarojs/taro";
import { updateInstall } from "@/api/install";
const Apply = () => {
  const [form] = Form.useForm();
  const [visible, setIsVisible] = useState<boolean>(false);
  const [areaCodes, setAreaCodes] = useState<any[]>([]);
  const [address, setAddress] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});

  const [custmerCityData, setCustmerCityData] = useState<any[]>([]);

  const hanldeChooseAddree = async () => {
    let params = {
      pcode: 0,
    };
    let res = await getAreaCodeList(params);
    setCustmerCityData(res);
    setIsVisible(true);
  };

  const handleFinish = (values) => {
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
    updateInstall(params).then((res) => {
      Taro.showToast({
        title: "提交成功",
        icon: "success",
        duration: 2000,
      });
      Taro.navigateTo({
        url: "/pages/install/index",
      });
      console.log(res, "989");
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
      pcode: node.value,
    };
    let res = await getAreaCodeList(params);
    resolve(res);
  };

  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        let { data } = res;
        setUserInfo(data);
      },
    });
  }, []);

  return (
    <div className="px-4 py-2">
      <Form
        divider
        labelPosition="left"
        className="text-right"
        onFinish={handleFinish}
        form={form}
        footer={
          <Button block type="primary">
            提交
          </Button>
        }
      >
        <Form.Item label="姓名" name="ownerName">
          <Input placeholder="请输入姓名" maxLength={6} />
        </Form.Item>
        <Form.Item label="手机号" name="ownerPhone">
          <Input placeholder="请输入手机号" maxLength={13} />
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
          setAddress(path.map((item) => item.name)?.join(""));
          let lastItem = path[path.length - 1];
          form.setFieldsValue({
            regionCode: lastItem.code,
            regionName: lastItem.name,
          });
        }}
      />
    </div>
  );
};

export default Apply;
