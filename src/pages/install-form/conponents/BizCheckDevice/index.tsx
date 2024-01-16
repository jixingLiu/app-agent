import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Toast,
} from "@nutui/nutui-react-taro";
import { multipleUploadResult } from "../../utils/index";
import Taro from "@tarojs/taro";
import { Plus, Scan2 } from "@nutui/icons-react-taro";
import { getWxJsapiSignature } from "@/api/common"
import wx from 'weixin-js-sdk';

interface IProps {
  id: string | number,
  item: any;
  detailData: any,
  onConfirm: (values: any, apiName: string) => void;
}
type commonItemType = {
  serialNumber: string,
  registrationNo: string
}
const defaultCommonItemValue = {
  serialNumber: '',
  registrationNo: ''
}

const BizCheckDevice = (props: IProps) => {
  const { item, id, detailData, onConfirm } = props;

  const [form] = Form.useForm();
  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [wxConfig, setWxConfig] = useState<any>({})

  useEffect(() => {
    if (!item.component?.length) {
      let commonItem = {
        serialNumber: "",
        registrationNo: "",
      }
          
      let newItem = {
        ...item,
        component: [commonItem],
        dataStick: [commonItem],
        inverter: [commonItem],
      }
      setFormData(Object.assign(newItem || {}, {id}));
      form.setFieldsValue({
        ...newItem,
        id,
      });
      return
    }
    setFormData(Object.assign(item || {}, {id}));
    
    form.setFieldsValue({
      ...item,
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(['check'].includes(detailData?.state))
  }, [detailData?.state])

  const handleUpdateData = (
    componentKey: string,
    key: string,
    index: number,
    value: any
  ) => {
    console.log(componentKey, key, index, value);
    const updatedData = { ...formData };
    const componentData = updatedData[componentKey].map(
      (originItem, originIndex) => {
        if (index === originIndex) {
          return {
            ...originItem,
            [key]: value,
          };
          return originItem;
        }
        return originItem;
      }
    );
    setFormData((updatedData) => {
      return {
        ...updatedData,
        [componentKey]: componentData,
      };
    });
    form.setFieldsValue({
      [componentKey]: componentData,
    });
  };

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData((prevData) => ({ ...updatedData }));
    form.setFieldsValue({ ...updatedData });
  };

  useEffect(()=> {
    // getWxJsapiSignature({url: location.origin + location.pathname}).then(res => {
    //   let { data } = res
    //   if (!data) return
    //   delete data.url
    //   setWxConfig(data)
    //   wx.config({
    //     debug: false,  // 开启调试模式，可以在开发阶段打开
    //     ...data,
    //     jsApiList: ['Scan2QRCode'], // 需要使用的 JSSDK 功能列表
    //   });
    // })
  }, [])

  const renderInputGroup = (label: string, key: string) => {
    return formData[key]?.map((item, index) => (
      <div className="grid grid-cols-2 gap-1" key={`${key}-${index}`}>
        <div className="pr-4 relative">
          <Input
            key={`${key}-serialNumber`}
            // key={'serialNumber'}
            disabled={!isEdit}
            value={item.serialNumber}
            onChange={(value) =>
              handleUpdateData(key, "serialNumber", index, value)
            }
            placeholder={`${label}序列号`}
            type="text"
          />
          <Scan2 className="absolute top-1 right-0" style={{position: 'absolute'}} 
            onClick={()=> {
              wx.config({
                debug: true,  // 开启调试模式，可以在开发阶段打开
                ...wxConfig,
                jsApiList: ['Scan2QRCode'], // 需要使用的 JSSDK 功能列表
              });
              wx.ready(function () {  
                console.log(99)
                Taro.showToast({
                  title: '暂未开放',
                  icon: 'none',
                  duration: 2000
                })
                // 在这里调用 wx.Scan2QRCode
                // wx.Scan2QRCode({
                //   needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                //   Scan2Type: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                //   success: function (res) {
                //     console.log(res, 'qrCode')
                //     let  result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                //   },
                //   fail: function (res) {
                //     console.log(res, 'error')
                //   }
                // });
              });
              
            }}
          />
        </div>
        <div className="pr-4 relative">
          <Input
            key={`${key}-registrationNo`}
            value={item.registrationNo}
            disabled={!isEdit}
            onChange={(value) =>
              handleUpdateData(key, "registrationNo", index, value)
            }
            placeholder={`${label}注册码`}
            type="text"
          />
          <Scan2 className="absolute top-1 right-0" style={{position: 'absolute'}} />
        </div>
      </div>
    ));
  };
  const renderPlusGroup = (key: string) => {
    return (
      <div className="flex justify-center py-2">
        <Plus
          className="text-xl"
          onClick={() => {
            updateFormData(key, [
              ...formData[key],
              { ...defaultCommonItemValue },
            ]);
          }}
        />
      </div>
    );
  };
  const renderColumnsGroup = () => (
    <div className="grid grid-cols-2 gap-1 pt-2">
      <div className="px-5">序列号</div>
      <div className="px-5">注册码</div>
    </div>
  )

  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        onFinish={(values) => {
          onConfirm(values, "updateBizCheckDevice");
        }}
        footer={ isEdit &&
          <>
            <Button formType="submit" block>
              保存
            </Button>
          </>
        }
      >
        <div>
          <div className="px-5">组件信息</div>
          {renderColumnsGroup()}
          {renderInputGroup("组件信息", "component")}
          {renderPlusGroup('component')}
  

          <div className="px-5">设备信息</div>
          {renderColumnsGroup()}
          {renderInputGroup("逆变器信息", "inverter")}
          {renderPlusGroup('inverter')}

          <div className="px-5">电源信息</div>
          {renderColumnsGroup()}
          {renderInputGroup("数据棒信息", "dataStick")}
          {renderPlusGroup("dataStick")}
        </div>
      </Form>
    </div>
  );
};

export default BizCheckDevice;
